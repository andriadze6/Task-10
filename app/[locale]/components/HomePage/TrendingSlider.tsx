"use client";
import Image from "next/image";
import { useState } from "react";
import useSlider from "@/app/[locale]/hooks/changeSlider";
import { Database } from "../../lib/dataTypes ";

type homepageType = {
  manTrending: Database["public"]["Views"]["man_tranding_product_view"]["Row"][];
  womanTrending: Database["public"]["Views"]["woman_tranding_product_view"]["Row"][];
  kidTrending: Database["public"]["Views"]["kid_tranding_product_view"]["Row"][];

};

export default function Slider({
  manTrending,
  womanTrending,
  kidTrending,
  
}: homepageType) {
  // debugger;
  const [category, setCategory] = useState({
    category: "man",
    data: manTrending,
  });
  function changeCategory(value: string) {
    // debugger;
    if (value === "man") {
      setCategory({
        category: "man",
        data: manTrending,
      });
    }
    if (value === "woman") {
      setCategory({
        category: "woman",
        data: womanTrending,
      });
    }
    if (value === "kid") {
      setCategory({
        category: "kid",
        data: kidTrending,
      });
    }
  }
  let { sliderState, changeSlider } = useSlider(3);

  return (
    <div className="TrendingWrapper">
      <div className="TrendingContainer">
        <div className="TrendingDiv-header">
          <h3>trend collection</h3>
          <div
            style={{
              textAlign: "center",
              justifyContent: "flex-start",
              fontSize: "15px",
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
            }}
          >
            <button
              onClick={() => {
                changeCategory("man");
              }}
              className={`${
                category.category === "man" ? "Active" : ""
              } lineButton`}
            >
              Man
            </button>
            <button
              onClick={() => {
                changeCategory("woman");
              }}
              className={`${
                category.category === "woman" ? "Active" : ""
              } lineButton`}
            >
              Woman
            </button>
            <button
              onClick={() => {
                changeCategory("kid");
              }}
              className={`${
                category.category === "kid" ? "Active" : ""
              } lineButton`}
            >
              Kid
            </button>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <button className="lineButton">view all collections</button>
          </div>
        </div>
        <div className="TSlider-Wrapper">
          <div
            className="TSlider-Container"
            style={{
              transform: `translate3d(-${sliderState.transferX}%, 0, 0)`,
            }}
          >
            {category.data.map((item) => {
              return (
                <div
                  key={`product-${item.product_ID}`}
                  style={{ flex: `0 0 calc(100% / ${3})` }}
                  className="Item"
                >
                  <div style={{ position: "relative" }}>
                    {item?.img &&
                      Object.entries(item.img).map(([_, imgArray], index) => {
                        if (index === 0 && Array.isArray(imgArray)) {
                          return (
                            <div
                              key={`image-group-${item.product_ID}-${index}`}
                            >
                              <Image
                                key={`image-1-${item.product_ID}-${index}`}
                                className="T-Img"
                                alt=""
                                height={500}
                                width={500}
                                src={imgArray[0]}
                              />
                              <Image
                                key={`image-2-${item.product_ID}-${index}`}
                                className="T-Img2"
                                alt=""
                                height={500}
                                width={500}
                                src={imgArray[2]}
                              />
                            </div>
                          );
                        }
                        return null;
                      })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ display: "flex", gap: "60px", justifyContent: "center" }}>
          <button
            onClick={() => {
              changeSlider(0);
            }}
            className="slider-Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              changeSlider(1);
            }}
            className="slider-Button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
