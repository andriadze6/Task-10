"use client";

import NewArrival11 from "../../assets/img/homePageImg/NewArrival/NewArrival1-1.png";
import NewArrival12 from "../../assets/img/homePageImg/NewArrival/NewArrival1-2.png";
import NewArrival21 from "../../assets/img/homePageImg/NewArrival/NewArrival2-1.png";
import NewArrival22 from "../../assets/img/homePageImg/NewArrival/NewArrival2-2.png";
import NewArrival31 from "../../assets/img/homePageImg/NewArrival/NewArrival3-1.png";
import NewArrival32 from "../../assets/img/homePageImg/NewArrival/NewArrival3-2.png";
import NewArrival41 from "../../assets/img/homePageImg/NewArrival/NewArrival4-1.png";
import NewArrival42 from "../../assets/img/homePageImg/NewArrival/NewArrival4-2.png";

import useSlider from "@/app/[locale]/hooks/changeSlider";
import Image from "next/image";
import NewCard from "../NewCard";
let NewArrival = [
  {
    id: 1,
    images: [NewArrival11, NewArrival12],
    title: "New arrival1",
    price: "$200",
  },
  {
    id: 2,
    images: [NewArrival21, NewArrival22],
    title: "New arrival2",
    price: "$200",
  },
  {
    id: 3,
    images: [NewArrival31, NewArrival32],
    title: "New arrival3",
    price: "$200",
  },
  {
    id: 4,
    images: [NewArrival41, NewArrival42],
    title: "New arrival4",
    price: "$200",
  },
];

export default function Slider() {
  ///SliderHook
  let { sliderState, changeSlider } = useSlider(3);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div className="sliderWrapper">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <h3>New arrivals</h3>
          <div style={{ display: "flex", gap: "20px" }}>
            <button className="lineButton">View all products</button>
            <div style={{ display: "flex", gap: "10px" }}>
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                  ></path>
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
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="sliderContainer"
          style={{ transform: `translate3d(-${sliderState.transferX}%, 0, 0)` }}
        >
          <div style={{ display: "flex" }}>
            {NewArrival.map((item) => {
              return (
                <div
                  key={item.id}
                  className="SliderItem"
                  style={{ flex: `0 0 calc(100% / ${3})` }}
                >
                  <NewCard props={item} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
