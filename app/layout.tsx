import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const monster = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Acme",
    description: "Shop Now",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={monster.className}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
