"use client"
import Link from "next/link";
import Image from 'next/image';
import { useState, ReactElement, CSSProperties } from 'react';


// interface NavbarProps {
//     // Add any props here
// }

const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

   const Header = (): ReactElement => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    let [loading, setLoading] = useState(false);
    let [color, setColor] = useState("#4A90E2");


    return (
        <>
            <nav className="bg-transparent backdrop-blur-md text-gray-700 shadow-lg w-full py-2 z-50 top-0 sticky font-marvel">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between items-center py-3 md:justify-start md:space-x-10">

                        <div className="flex justify-start lg:w-40">
                            <Link href="/" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center" passHref>
                            
                                <Image 
                                    src="/logo.svg"
                                    alt="Logo" 
                                    className="mr-2"
                                    width={50}
                                    height={20}
                                    priority
                                    style={{width: 'auto', height: 'auto'}}
                                />
                                <span className="font-bold text-xl pt-3">RUBIX</span>
                            
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="-mr-2 -my-2 md:hidden">
                            <button 
                                type="button" 
                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="sr-only">Open menu</span>
                                {/* Icon for Menu Button */}
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                                </svg>
                            </button>
                        </div>

                        {/* Links for large screens */}
                        <div className={`${isOpen ? 'block' : 'hidden'} absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden`}>
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                                <div className="pt-5 pb-6 px-5">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <Link href="#" className="text-base font-medium text-gray-500 hover:text-gray-900 flex items-center" passHref>
                                        
                                                <Image 
                                                    src="/logo.svg"
                                                    alt="Logo" 
                                                    className="mr-2"
                                                    width={50}
                                                    height={20}
                                                    priority
                                                    style={{width: 'auto'}}
                                                />
                                                <span className="font-bold text-xl pt-3">RUBIX</span>
                                            </Link>
                                        </div>
                                        <div className="-mr-2">
                                            <button 
                                                type="button" 
                                                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <span className="sr-only">Close menu</span>
                                                {/* Icon for Close Button */}
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <nav className="grid gap-y-8">
                                            {/* Add your mobile nav links here */}
                                            {/* Example: */}
                                            <Link className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="/"  passHref>
                                        
                                                Home
                                            
                                            </Link>

                                            <Link className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="/about" passHref>
                                        
                                                About US
                                            
                                            </Link>

                                            <Link className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" href="/features" passHref>
                                        
                                                Features
                                            
                                            </Link>

                                            <Link href="/pricing" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                                        
                                                Pricing
                                            
                                            </Link>

                                            <Link href="/how" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                                        
                                                How It Works
                                            
                                            </Link>

                                            {/* <Link href="/faqs" className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50" passHref>
                                                FAQs
                                            </Link> */}
                                            {/* Repeat for other links */}
                                        </nav>
                                        <button className="inline-flex mt-8 text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                                            <Link href="/Auth/signup" passHref>
                                            Sign Up
                                            </Link>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center justify-center md:flex-1 space-x-6 flex-grow">
                            <div className="w-3/4 flex justify-center items-center space-x-6 flex-grow">
                                <span className="font-bold, text-2xl">Coming Soon!</span>    
                                {/* <Link href="/" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref>
                                    Home
                                </Link>

                                <Link href="/about" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref onClick={() => setLoading(!loading)}>
                                    About Us
                                </Link>

                                <Link href="/features" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref onClick={() => setLoading(!loading)}>
                                    Features
                                </Link>

                                <Link href="/pricing" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref>
                                    Pricing
                                </Link>
                            
                                <Link href="/how" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref>
                                    How It Works
                                </Link> */}
                                {/* 
                                <Link href="/faqs" className="text-base font-bold text-gray-500 hover:text-gray-900" passHref>

                                    FAQs
                                
                                </Link> */}
                                {/* Repeat for other links */}
                            </div>
                            
                        </div>
                        
                        <div className="hidden md:flex w-1/5 justify-center items-center">
                            <button className="inline-flex items-center justify-center text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-full text-lg font-semibold hover:shadow-lg hover:scale-105 transition transform duration-300 ease-in-out active:bg-blue-700">
                                <Link href={"/auth/sign-up"} passHref className="font-bold">
                                    Sign Up
                                </Link>
                            </button>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
};


export default Header