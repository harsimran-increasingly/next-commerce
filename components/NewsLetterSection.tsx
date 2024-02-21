import React from "react";

function NewsLetterSection() {
    return (
        <div className="flex justify-center  p-20 min-h-96 flex-col bg-teal-600">
            <h4 className="text-2xl">
                Acme has completely transformed the way I shop online. The seamless user experience, extensive product range, and lightning-fast delivery are unparalleled. Acme's commitment to quality and customer satisfaction have made me a loyal customer. I couldn't be happier with my purchases –
                truly a game-changer in the world of e-commerce!
            </h4>
            <p className="text-left mt-6">- John Jacob - Digital Market Expert</p>
            <button
                role="button"
                aria-label="Click to perform an action"
                className="mt-10 cursor-pointer  max-w-max flex cursor-pointer items-center rounded-md border-2 border-black bg-[#C4A1FF] px-10 py-3 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
            >
                Subscribe To Our Newsletter
            </button>
        </div>
    );
}

export default NewsLetterSection;
