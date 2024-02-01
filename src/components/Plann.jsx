import React from "react";
import peach from "../imgs/peach.jpg";
import wine from "../imgs/wine.jpg"
import lemons from "../imgs/lemons.jpg";
import kiwi from "../imgs/kiwi.jpg";
import grapefruit from "../imgs/grapefruit.jpg";

const Plann = () => {
    return (
        <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
            {/*left side*/}
            <div className="grid grid-cols-2 grid-rows-6 h-[80vh]">
                <img className="row-span-3 object-cover w-full h-full p-2" src={peach} alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2" src={wine} alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2" src={lemons} alt="/" />
                <img className="row-span-3 object-cover w-full h-full p-2" src={kiwi} alt="/" />
                <img className="row-span-2 object-cover w-full h-full p-2" src={grapefruit} alt="/" />
            </div>
            {/* Right Side */}
            <div className='flex flex-col h-full justify-center'>
                <h3 className='text-5xl md:text-5xl font-bold'>과일농장은?</h3>
                <p className='text-2xl py-6'>
                과일농장은 가족이 함께 운영하고 있는 가족농장입니다.
                </p>
                <p className='pb-6'>
                    우리 가족이 먹는다는 마음으로 최선을 다해 과일을 재배합니다.
                </p>
                <div>
                    <button className='border-black mr-4 hover:shadow-xl'>
                        더보기
                    </button>
                    <button className='bg-black text-white border-black hover:shadow-xl'>
                        예약하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Plann;