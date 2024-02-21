import React from "react";

function FooterSection() {
    return (
        <footer className="flex justify-center  p-12 flex-col bg-black text-white">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <p>&copy; 2024 Acme. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                About Us
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
