import React from 'react';
import Image from "next/image";
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center md:justify-end py-3 md:pl-10 md:py-10 text-black w-full md:w-full h-full"> 
      <div className='w-full'>
        <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-[#c4c7c5] text-center md:text-left text-nowrap">
          Your Personal
        </h1>
        <div className="flex items-center justify-center md:justify-start mt-1 text-3xl md:text-4xl xl:text-6xl font-bold w-full">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4b90ff] to-[#ff5546]">
            AI TUTOR
          </span>
          <Image src={'/gemini_icon.png'} alt="star icon" width={50} height={50} priority className='mt-2 sm:mt-0 sm:ml-2'/>
        </div>
      </div>
      
      <p className=" text-sm md:text-xl xl:text-2xl font-medium mt-2 text-center md:text-left text-[#c4c7c5] mx-auto opacity-80">
        Rubix helps students spend less time reading, increase understanding, identify strengths and weaknesses and track improvement.
      </p>

      <div className='flex justify-center md:justify-start items-end mt-5 space-y-1 space-x-2 w-full'>
        <Link href={"/about"} aria-label='About page'>
          <p className="inline-flex items-center justify-center h-10 md:h-12 md:px-6 px-2 font-semibold text-gray-900 rounded-md border border-slate-800 bg-gradient-to-r from-[#b9bbb9] to-[#d4d5d8] hover:scale-110 transition-transform duration-300 text-nowrap">
            Learn More
            <ExternalLink className='ml-2' size={15} />
          </p>
        </Link>

        <Link href={"#form"} aria-label='Waitlist Form'>
          <p className="inline-flex items-center justify-center h-10 md:h-12 md:px-6 px-2 font-medium text-[#c4c7c5] rounded-md border border-slate-800 bg-gradient-to-r from-[#000103] to-[#1e2631] hover:scale-110 transition-transform duration-300 text-nowrap">
            Join Waitlist
          </p>
        </Link>
      </div>
      <p className='w-full text-center md:text-left text-[#c4c7c5] text-base opacity-80 mt-1'>
        Get notified when Rubix launches 🤖
      </p>

    </div>
  );
}

export default Hero;
