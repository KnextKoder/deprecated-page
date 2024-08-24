"use client";
import React from "react";
import { BackgroundBeams } from "@/app/components/ui/background-beams";
import WaitlistForm from "../WaitlistForm";


export function BackgroundBeamsDemo() {
  return (
    <div className="h-full w-full bg-gray-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-xl md:text-4xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Supercharge your learning,<br/> Join the Rubix waitlist.
        </h1>
        <p></p>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-base text-center relative z-10">        
        Rubix is your AI learning buddy that adjusts lessons to fit your goals and style. It keeps track of your progress, focuses on what you need to improve, and gives you quizzes and feedback in the same style as your teachers. 
        <br />
        Sign up for the Rubix waitlist to boost your understanding and enjoy a smarter way to learn.
        </p>
      </div>
      <BackgroundBeams />
      <WaitlistForm/>
    </div>
  );
}

export default BackgroundBeamsDemo
