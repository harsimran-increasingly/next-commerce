"use server";
import { fetchData } from "@/lib/apiService";
import Link from "next/link";
import ImageCard from "./ImageCard";

const CategorySection = async () => {
   const category = await fetchData("products/categories", { method: "GET" });

    const images = [
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=3024&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1656428361240-47e1737b7dce?q=80&w=2583&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1602810320073-1230c46d89d4?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=3774&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ];
   
    return (
        <div className="flex justify-center items-center py-20 flex-col min-h-[40rem]">
            <h3 className="text-3xl text-center max-w-[70vw]">Explore, experiment, and uncover the potential success of your countless creative ideas on our eCommerce platform.</h3>
            <div className="flex gap-20 mt-24">
                {category.map((cat: string, index: number) => {
                    return (
                        <Link href={"/category/" + cat} passHref>
                            <ImageCard imageUrl={images[index]}>{cat}</ImageCard>
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default CategorySection;
