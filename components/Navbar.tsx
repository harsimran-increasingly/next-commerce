import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <div className="px-6 py-5 font-bold border flex justify-between ">
            <div className="flex gap-5">
                <Link passHref href="/"> <p className="w-min cursor-pointer rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ">Acme</p></Link>
               
                <p className="w-min cursor-pointer rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ">Shop</p>
                <p className="w-min cursor-pointer rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ">Discover</p>
            </div>
            <div>
                <p className="w-min cursor-pointer rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ">Cart</p>
            </div>
        </div>
    );
}

export default Navbar;
