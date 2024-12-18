"use client";

import Image from "next/image";
import "../../assets/css/NewHomePage.css";
import TrendingSlider from "./TrendingSlider";
import Link from "next/link";
import MainBanner from "../../assets/img/homePageImg/NewArrival/MainBanner.png";
import Slider from "./Slider";
import { Product } from "../../../types";

type homepageType = {
  manTrending: Product[];
  womanTrending: Product[];
  kidTrending: Product[];
  newArrival: Product[];
};
function HomePage({
  manTrending,
  womanTrending,
  kidTrending,
  newArrival,
}: homepageType) {
  return (
    <>
      {/* <div className="mainBillboard">
                <div className="mainBillboard-1Column">
                    <div className="mainBillboard-ImgDiv">
                        <div>
                            <Image
                            src={SwimWear} // Make sure SwimWear is imported correctly
                            alt="Swimwear Collection"
                            className="mainBillboard-Img"
                        />
                        </div>
                        <div className="text-Div">
                            <h4>Low price? love it!</h4>
                            <h3>Swimwear<br/>Collection</h3>
                            <button className="roundButton">shop now</button>
                        </div>
                    </div>
                </div>
                <div className="mainBillboard-2Column">
                    <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", gap:"20px"}}>
                        <div className="mainBillboard-ImgDiv">
                            <div>
                                <Image  className="mainBillboard-Img" alt="" src={BillboardImg2}/>
                            </div>
                            <div className="text-Div">
                                <h4 style={{fontSize:"30px"}}>Get your glow on</h4>
                                <button className="lineButton">shop now</button>
                            </div>
                        </div>
                        <div className="mainBillboard-ImgDiv">
                            <div>
                                <Image  className="mainBillboard-Img" alt="" src={BillboardImg3}/>
                            </div>
                            <div className="text-Div">
                                <h4 style={{fontSize:"30px"}}>Spring bread</h4>
                                <button className="lineButton">shop now</button>
                            </div>
                        </div>
                    </div>
                    <div style={{display:"grid", gridTemplateColumns:"1fr 2fr", gap:"20px"}}>
                        <div className="mainBillboard-ImgDiv mainBillboard-row">
                            <div>
                                <Image className="mainBillboard-Img" alt="" src={BillboardImg4}/>
                            </div>
                            <div className="text-Div">
                                <h4 style={{fontSize:"30px"}}>Spring bread</h4>
                                <button className="lineButton">shop now</button>
                            </div>
                        </div>
                        <div className="mainBillboard-ImgDiv mainBillboard-row">
                            <div>
                                <Image className="mainBillboard-Img" alt="" src={BillboardImg5}/>
                            </div>
                            <div className="text-Div">
                                <h4 style={{fontSize:"30px"}}>Up to 40% off</h4>
                                <button className="lineButton">shop now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <TrendingSlider
        manTrending={manTrending}
        womanTrending={womanTrending}
        kidTrending={kidTrending}
      ></TrendingSlider>
      <div className="BannerWrapper">
        <div className="BannerContainer">
          <Link className="mainBanner" href="/">
            <div className="mainBanner-ImgDiv">
              <Image height={500} width={500} alt="" src={MainBanner} />
            </div>
            <button className="exploreButton">Explore</button>
          </Link>
          <Slider newArrival={newArrival}></Slider>
        </div>
      </div>
    </>
  );
}
export default HomePage;
