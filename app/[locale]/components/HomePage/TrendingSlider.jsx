
'use client'
import Image from "next/image";
import { useState } from "react";
import useSlider from '@/app/hooks/changeSlider'






export default function Slider({trending}){
    debugger
    let { sliderState, changeSlider } = useSlider(3);
    return(
        <div className="TrendingWrapper">
        <div className="TrendingContainer">
            <div className="TrendingDiv-header">
                <h3>trend collection</h3>
                <div style={{textAlign:"center", justifyContent:"flex-start", fontSize:"15px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr"}}>
                    <button className="lineButton">Man</button>
                    <button className="lineButton">Woman</button>
                    <button className="lineButton">Kid</button>
                </div>
                <div style={{display:"flex",alignItems:"center", gap:"20px"}}>
                    <button className="lineButton">view all collections</button>
                </div>
            </div>
            <div className="TSlider-Wrapper">
                <div className="TSlider-Container"
                    style={{transform:`translate3d(-${sliderState.transferX}%, 0, 0)`}}>
                    {trending.map((item)=>{
                        return(
                            <div key={item.id} style={{flex: `0 0 calc(100% / ${3})`}} className="Item">
                                <div style={{position:"relative"}}>
                                    <Image className="T-Img" alt="" height={500} width={500} src={item.img[0]}/>
                                    <Image className="T-Img2" alt="" height={500} width={500} src={item.img[1]}/>
                                </div>
                            </div>
                        )})
                    }
                </div>
            </div>
            <div style={{display:"flex",gap:"60px", justifyContent:"center"}}>
                <button onClick={()=>{changeSlider(0)}} className="slider-Button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18" />
                    </svg>
                </button>
                <button onClick={()=>{changeSlider(1)}} className="slider-Button">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>
                </button>
            </div>
        </div>
    </div>
    )
}