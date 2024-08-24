import React from 'react';
import { ChevronLeft, BrainCircuit, GitCommitVertical, ListChecks } from 'lucide-react';
import Link from 'next/link';


const List = () =>{
    
  // {/*Initiates a delay for 0.5 secs to imitate fetch requests, api calls, etc that have a modicum of delay associated*/}
  // await new Promise(resolve => setTimeout(resolve, 500)) 

  return (
    <div className='flex items-center justify-center w-screen h-screen bg-gray-950'>
      <Link href="/" className='absolute top-4 left-4 text-white flex items-center space-x-2'>
        <ChevronLeft className="w-8 h-8"/>
        <span>Back</span>
      </Link>

      <div className='flex flex-col items-center p-8 space-y-6 bg-gray-900 rounded-lg shadow-lg'>
        <ol className='space-y-4 text-white'>
          <li className='flex items-center space-x-4'>
            <BrainCircuit className='w-8 h-8'/>
            <p className='text-lg'>Rubix leverages AI to customize its teaching approach, ensuring optimal learning outcomes.</p>
          </li>
          <li className='flex items-center space-x-4'>
            <GitCommitVertical className='w-8 h-8'/>
            <p className='text-lg'>Rubix identifies your strengths and areas for growth by analyzing your interactions.</p>
          </li>
          <li className='flex items-center space-x-4'>
            <ListChecks className='w-8 h-8'/>
            <p className='text-lg'>Enhance your understanding with AI-generated quizzes based on your previous lessons.</p>
          </li>
        </ol>

        <Link href="/#form">
          <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
            Join Waitlist
          </button>
        </Link>
      </div>
    </div>
  );
}

export default List