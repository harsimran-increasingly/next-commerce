import React from "react";
import phoneImage from "@/public/phone.png"
import Image from "next/image";
function HeroSection() {
    return (
        <div className="flex min-h-96 ">
            <div className="border-2 border-black flex flex-col justify-center items-start flex-1 gap-10 bg-[#ff90e8] p-24">
                <h1 className="text-6xl">Discover the best at lowest price</h1>
                <p className="font-semibold text-xl">
                    Discover the power of selling online with Acme. Start monetizing your skills and products effortlessly. Whether you&apos;re a budding creator or an established entrepreneur, turn your ideas into dollars. Explore, create, and profit – it&apos;s that straightforward with our ecommerce
                    solution
                </p>
                <button className="px-10 rounded py-3 bg-black text-white font-semibold text-xl  hover:bg-gray-800 hover:shadow-yellow active:bg-[#00E1EF]">Discover Products</button>
            </div>
            <div className="border-2 border-l-0 border-black p-24 flex-1 bg-yellow-400 flex justify-center">
                <div className="relative">
                    <Image src={phoneImage}  alt="Phone" height="400" width="400" className="relative z-10" />
                    {/*?xml version="1.0" standalone="no"?*/}{" "}
                    <svg className="absolute top-[-8rem] left-[-5rem] w-[40rem]" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
                        {" "}
                        <defs>
                            {" "}
                            <linearGradient id="sw-gradient" x1={0} x2={1} y1={1} y2={0}>
                                {" "}
                                <stop id="stop1" stopColor="rgb(255 144 232)" offset="0%" /> <stop id="stop2" stopColor="rgb(255 144 232)" offset="100%" />{" "}
                            </linearGradient>{" "}
                        </defs>{" "}
                        <path
                            fill="url(#sw-gradient)"
                            d="M27,-25.6C34.1,-19.9,38.2,-10,37,-1.2C35.8,7.6,29.3,15.1,22.2,22.3C15.1,29.5,7.6,36.4,-1.8,38.2C-11.1,40,-22.3,36.7,-30.1,29.5C-38,22.3,-42.6,11.1,-41.5,1C-40.5,-9.1,-33.9,-18.1,-26,-23.8C-18.1,-29.5,-9.1,-31.7,0.5,-32.2C10,-32.6,19.9,-31.3,27,-25.6Z"
                            width="100%"
                            height="100%"
                            transform="translate(50 50)"
                            strokeWidth={1}
                            style={{ transition: "all 0.3s ease 0s", border: "1px solid black" }}
                        />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;
