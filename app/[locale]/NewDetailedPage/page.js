"use client";

import Header from "../components/Header/NewHeader";
import "../assets/css/newDetailedPage.css";
import Image from "next/image";
import img1 from "../assets/img/detailedPage/img1.png";
import img2 from "../assets/img/detailedPage/img2.png";
import img3 from "../assets/img/detailedPage/img3.png";
import img4 from "../assets/img/detailedPage/img4.png";
import img5 from "../assets/img/detailedPage/img5.png";
import useSlider from "@/app/hooks/changeSlider";
import "../assets/css/NewHomePage.css";

let imgArray = [img1, img2, img3, img4, img5];
export default function NewDetailedPage() {
  let { sliderState, changeSlider } = useSlider(1, 5);
  // debugger;
  return (
    <>
      <Header></Header>
      <div className="NewDetailedPage-Wrapper">
        <div className="NewDetailedPage-Container">
          <div className="Slider-Container">
            <div className="Small-ImgDiv">
              {imgArray.map((item, index) => {
                return (
                  <div
                    className={`${
                      sliderState.clickAmount === index ? "borderActive" : ""
                    }`}
                    key={index}
                  >
                    <Image
                      width={70}
                      height={70}
                      className="Small-Img"
                      alt=""
                      src={item}
                    />
                  </div>
                );
              })}
            </div>
            <div className="Big-ImgDiv">
              <div
                style={{
                  transform: `translate3d(-${sliderState.transferX}%, 0, 0)`,
                }}
                className="Big-Img-Container"
              >
                {imgArray.map((item, index) => {
                  return (
                    <div style={{ flex: `0 0 calc(100%)` }} key={index}>
                      <Image
                        width={500}
                        height={700}
                        className="Big-Img"
                        alt=""
                        src={item}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="changeSliderButton">
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
          <div>Info</div>
        </div>
      </div>
    </>
  );
}
