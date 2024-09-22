import { SiExpensify } from "react-icons/si";
import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-black p-4 lg:px-52">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-white text-2xl font-bold"><SiExpensify fontSize={50}/></div>

                <div className="lg:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d={!isOpen ? "M4 6h16M4 12h16m-7 6h7" : "M6 18L18 6M6 6l12 12"}
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Navbar Links */}
                <div
                    className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}
                >
                    <a href="#" className="block text-white py-2 px-4 lg:inline-block">
                        Home
                    </a>
                    <a href="#" className="block text-white py-2 px-4 lg:inline-block">
                        Transactions
                    </a>
                    <a href="#" className="block text-white py-2 px-4 lg:inline-block">
                        Expenses
                    </a>
                  
                    <a className='flex justify-center items-center border border-sky-200 p-2'>
                        
                        <img
                            alt=""
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            className="h-8 w-8 rounded-full"
                        />
                        <p className="block text-white px-2 lg:inline-block">Zeeshan Khan</p>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
