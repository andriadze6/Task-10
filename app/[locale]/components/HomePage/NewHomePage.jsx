import Image from "next/image";
import "../../assets/css/NewHomePage.css"
import BillboardImg1 from "../../assets/img/homePageImg/NewHomePage/Header-Img1.png"
import BillboardImg2 from "../../assets/img/homePageImg/NewHomePage/Header-Img2.png"
import BillboardImg3 from "../../assets/img/homePageImg/NewHomePage/Header-Img3.png"
import BillboardImg4 from "../../assets/img/homePageImg/NewHomePage/Header-Img4.png"
import BillboardImg5 from "../../assets/img/homePageImg/NewHomePage/Header-Img5.png"
import KidsTrending from "../../assets/img/homePageImg/Trending/Kids.png"
import TrendingSlider from "./TrendingSlider";
import WomanTrending from "../../assets/img/homePageImg/Trending/WomanTrend.png"
import SwimWear from '../../assets/img/homePageImg/NewHomePage/SwimWear.png'
import Link from "next/link";
import MainBanner from '../../assets/img/homePageImg/NewArrival/MainBanner.png'
import Slider from "../HomePage/Slider";

import ManTrending from "../../assets/img/homePageImg/Trending/Man/ManTrending.png"
import ManTrending2 from "../../assets/img/homePageImg/Trending/Man/ManTrending2.png"
import ManTrending3 from "../../assets/img/homePageImg/Trending/Man/ManTrending3.png"
import ManTrending4 from "../../assets/img/homePageImg/Trending/Man/ManTrending4.png"
import ManTrending5 from "../../assets/img/homePageImg/Trending/Man/ManTrending5.png"
import ManTrending6 from "../../assets/img/homePageImg/Trending/Man/ManTrending6.png"
import ManTrending7 from "../../assets/img/homePageImg/Trending/Man/ManTrending7.png"
import ManTrending8 from "../../assets/img/homePageImg/Trending/Man/ManTrending8.png"

let trending =[
    {
        id:5,
        images:[ManTrending, ManTrending2],
        title:"New arrival1",
        price:"$200",
    },
    {
        id:6,
        images:[ManTrending3, ManTrending4],
        title:"New arrival2",
        price:"$200",
    },
    {
        id:7,
        images:[ManTrending5, ManTrending6],
        title:"New arrival3",
        price:"$200",
    },
    {
        id:8,
        images:[ManTrending7, ManTrending8],
        title:"New arrival4",
        price:"$200",
    },
]

// async function GetHomePageData(params) {
//     const [woman, man] = await Promise.all([
//         fetch('https://dummyjson.com/products/category/womens-dresses'),
//         fetch('https://dummyjson.com/products/category/mens-shirts')
//     ])
//     let [manT, womanT] = await Promise.all([
//         man.json(), woman.json()
//     ])
//     return [manT.products,womanT.products]
// }

async function HomePage(){
    // const data = await GetHomePageData();
    console.log(MainBanner)
    return(
        <>
            <div className="mainBillboard">
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
                                <Image  className="mainBillboard-Img" alt="" src={BillboardImg4}/>
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
            </div>
            <TrendingSlider trending={trending}></TrendingSlider>
            <div className="BannerWrapper">
                <div className="BannerContainer">
                    <Link className="mainBanner" href='/'>
                        <div className="mainBanner-ImgDiv">
                            <Image height={500} width={500} alt="" src={MainBanner}/>
                        </div>
                        <button className="exploreButton">Explore</button>
                    </Link>
                <Slider></Slider>
                </div>
            </div>
        </>
    )
}
export default HomePage;