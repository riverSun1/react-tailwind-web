import React from "react";
import hero from "../imgs/strawberries_hero.jpg";

const Hero = () => {
    return (
        <div className="w-full h-screen">
            <img className="top-0 left-0 w-full h-screen object-cover" src={hero} alt="/"/>
            <div className="bg-black/30 absolute top-0 left-0 w-full h-screen"/>
            <div className="absolute top-0 w-full h-full flex flex-col justify-center text-white">
                <div className="md:left-[10%] max-w-[1100px] m-auto absolute p-4">
                    <p>Enjoy the fruit.</p>
                    <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl">과일 농장</h1>
                    <p className="max-w-[600px] drop-shadow-2xl py-2 text-xl">마을에서 성실하게 키운 달콤한 과일들을 재배합니다.</p>
                    <button className="bg-white text-black">문의하기</button>
                </div>
            </div>
        </div>
    );
};

export default Hero