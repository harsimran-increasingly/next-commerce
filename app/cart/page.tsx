"use client";
import { useCartStore } from "@/store/zustand";
import React, { useEffect, useState } from "react";

interface Product {
    id: number;
    image: string;
    title: string;
    price: number;
    description: string;
    rating: Rating;
}

interface Rating {
    count: number;
    rate: number;
}

function Page() {
    const { items,removeFromCart } = useCartStore();
    const [total, setTotal] = useState(0);
    useEffect(() => {
        let current = items.reduce((accumulator, currentProduct) => {
            return accumulator + currentProduct.product.price;
        }, 0);
        setTotal(current);
    }, [items]);

   
    return (
        <div className="p-5 bg-green-500 flex h-screen w-full gap-10">
            <div className="cart-items flex flex-col w-full gap-2">
                {items.map((prod: prod,index: number) => {
                    return (
                        <div className="border-2  border-black bg-white p-5 flex items-center justify-between">
                            <div className="flex">
                                {" "}
                                <img src={prod.product.image} alt="" className="w-24" />
                                <div className="ml-6">
                                    <h3 className="font-bold text-xl">{prod.product.title}</h3>
                                    <p className="font-semibold">&#8377;{prod.product.price}</p>
                                    <p>Qty: {prod.qty}</p>
                                </div>
                            </div>

                            <button className="w-min cursor-pointer rounded-full border-2 border-black bg-red-500 px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none" onClick={() => removeFromCart(index)}>Remove</button>
                        </div>
                    );
                })}
            </div>
            <div className="cart-total border-2 h-max  border-black bg-white p-5 w-96 flex flex-col gap-5 justfy-between">
                <div>
                    {" "}
                    <h3 className="font-bold text-2xl">Order Summary</h3>
                    <div className="flex items-center justify-between mt-5">
                        <p>Subtotal: </p>
                        <p>&#8377;{total}</p>
                    </div>
                    <p className="font-light text-sm mt-10">Shipping & taxes calculated at checkout</p>
                </div>

                <button className="px-10 rounded py-3 bg-black text-white font-semibold text-xl  hover:bg-gray-800 hover:shadow-yellow active:bg-[#00E1EF]">Go To Checkout</button>
            </div>
        </div>
    );
}

export default Page;
