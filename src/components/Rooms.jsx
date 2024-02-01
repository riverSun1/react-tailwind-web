import React from "react";
import lemon from "../imgs/lemon.jpg";
import cherries from "../imgs/cherries.jpg";
import fruits2 from "../imgs/fruits2.jpg";

const Rooms = () => {
    return (
        <div className="max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
            <div className="lg:top-20 relative lg:col-span-1 col-span-2">
                <h3 className="text-2xl font-bold">과일농장의 목표</h3>
                <p className="pt-4">과일농장의 목표는 건강한 먹거리, 건강한 농업, 건강한 환경 입니다. 자연에 해가 안되는 착한 농법으로 건강한 과일을 생산하고 건강한 환경을 지켜나가는 것이 과일농장이 추구하는 지속가능한 농업의 방향입니다.</p>
            </div>
            <div className="grid grid-cols-2 col-span-2 gap-2">
                <img className="object-cover w-full h-full" src={lemon} alt="/"/>
                <img className="row-span-2 object-cover w-full h-full" src={cherries} alt="/"/>
                <img className="object-cover w-full h-full" src={fruits2} alt="/"/>
            </div>
        </div>
    )
}

export default Rooms