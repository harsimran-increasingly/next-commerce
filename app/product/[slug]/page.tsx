"use client";
import { fetchData } from "@/lib/apiService";
import { useEffect, useState } from "react";
export default function Page({ params }: { params: { slug: string } }) {
    const [product, setProduct] = useState<any>({});

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const results = await fetchData("products/" + params.slug, { method: "GET" });
                setProduct(results);
            } catch (error) {
                console.error("Error Fetching Data ", error);
            }
        };
        fetchProduct();
    }, []);

    if (Object.keys(product).length === 0) {
        return <div className="container m-auto py-10">Loading..</div>;
    }

    console.log(product);
    return (
        <div>
            <div className="flex  m-auto border-2 border-black  ">
                <div className="flex-1 p-20 flex">
                    <img src={product.image} className="w-96 m-auto" />
                </div>
                <div className="flex-1 bg-green-500 p-20 border-l-2 border-black">
                    <h1 className="text-5xl font-bold">{product.title}</h1>
                    <div className="flex items-center mt-5 mb-5 gap-5">
                        <div className="w-max rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">{product.rating.count} Reviews</div>
                        <div className="w-max rounded-full border-2 border-black bg-[#C4A1FF] px-3 py-1.5 text-sm font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">{product.rating.rate}</div>
                    </div>
                    <span className="text-3xl font-semibold text-gray-900">&#8377; {product.price}</span>
                    <p className="text-md text-light mt-5  text-gray-900 ">{product.description}</p>
                    <button
                        role="button"
                        aria-label="Click to perform an action"
                        className="flex  mt-10 cursor-pointer items-center rounded-md border-2 border-black bg-[#f1f333] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                    >
                        Enquire Product
                    </button>
                </div>
            </div>
            <div>
                <section className="bg-purple-400 py-16">
                    <div className="container mx-auto">
                        <h2 className="text-3xl font-bold mb-8">Return Policy</h2>

                        <div className="prose space-y-3">
                            <p className="font-bold">At Acme, we want you to be completely satisfied with your purchase. If you're not entirely happy with your order, we're here to help.</p>
                            <p>
                                <strong>Returns</strong>: You have 30 calendar days to return an item from the date you received it. To be eligible for a return, your item must be unused and in the same condition that you received it. Your item must be in the original packaging.
                            </p>
                            <p>
                                <strong>Refunds</strong>: Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you of the status of your refund after inspecting the item.
                            </p>
                            <p>
                                <strong>Exchanges</strong>: If you need to exchange an item, please contact our customer service. We'll guide you through the process.
                            </p>
                            <p>
                                <strong>Shipping</strong>: You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are non­refundable.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
