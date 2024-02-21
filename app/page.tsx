import CategorySection from "@/components/CategorySection";
import FooterSection from "@/components/FooterSection";
import HeroSection from "@/components/HeroSection";
import NewsLetterSection from "@/components/NewsLetterSection";

export default function Home() {
    return (
        <main>
            <HeroSection />
            <CategorySection />
            <NewsLetterSection />
            <FooterSection/>
        </main>
    );
}
