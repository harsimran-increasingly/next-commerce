"use client";
import { fetchData } from "@/lib/apiService";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
      rate: number;
      count: number;
    };
  }
  
export default function Page({ params }: { params: { slug: string } }) {
    const [categoryProducts, setCategoryProducts] = useState<Product | null>(null)

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const results = await fetchData("products/category/" + params.slug, { method: "GET" });
                setCategoryProducts(results);
            } catch (error) {
                console.error("Error Fetching Data ", error);
            }
        };
        fetchProduct();
    }, []);

    if (!categoryProducts) {
        return <div className="container m-auto py-10">Loading..</div>;
    }

    console.log(categoryProducts);
    return (
        <div className="p-20">
            <h2 className="text-4xl font-bold">Best of {params.slug}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10  mt-20">{categoryProducts.map((product: object) => {
                return (
                    <div>
                        <div className=" h-full border-black border-2 rounded-md hover:shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white">
                            <a href="" className="block cursor-pointer">
                                <article className="w-full h-full">
                                    <figure className="w-full h-1/2 border-black border-b-2">
                                        <img src={product.image} alt="thumbnail" className="w-full h-[24rem] p-10 object-cover" />
                                    </figure>
                                    <div className="px-6 py-5 text-left h-full">
                                       
                                        <h1 className="text-xl mb-4 truncate">{product.title}</h1>

                                        <Link passHref href={'/product/'+ product.id}>

                                        <strong>Read More</strong>
                                        </Link>
                                    </div>
                                </article>
                            </a>
                        </div>
                    </div>
                );
            })}</div>
            
        </div>
    );
}
