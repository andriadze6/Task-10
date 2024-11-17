import Header from "../components/Header/NewHeader";
import '../assets/css/newDetailedPage.css'
import Image from "next/image";
import img1 from '../assets/img/detailedPage/img1.png'
import img2 from '../assets/img/detailedPage/img2.png'
import img3 from '../assets/img/detailedPage/img3.png'
import img4 from '../assets/img/detailedPage/img4.png'
import img5 from '../assets/img/detailedPage/img5.png'
 export default function NewDetailedPage() {
    return (
        <>
            <Header></Header>
            <div className="NewDetailedPage-Wrapper">
                <div className="NewDetailedPage-Container">
                    <div>
                        <div className="Slider-Container">
                            <div className="Small-ImgDiv">
                                <div>
                                    <Image width={100} height={100} className="Small-Img" alt="" src={img1}/>
                                </div>
                                <div>
                                    <Image width={100} height={100} className="Small-Img" alt="" src={img2}/>
                                </div>
                                <div>
                                    <Image width={100} height={100} className="Small-Img" alt="" src={img3}/>
                                </div>

                            </div>
                            <div className="Big-ImgDiv">
                                Big
                            </div>
                        </div>
                        <div>Info</div>
                    </div>
                </div>
            </div>
        </>
    );
}