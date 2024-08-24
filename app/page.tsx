import Image from "next/image";
import Hero from "./components/Hero";
import { LazyBackgroundBeams } from "./components/lazy/LazyBackgroundBeamsDemo";
import { LazyFaq } from "./components/lazy/LazyFaq";

export default function Home() {
  return (
    <div className="bg-gray-950 w-full h-full m-0 p-0">
      <div className="box-border grid gap-3 p-4 items-center justify-center w-full">
        {/* Text and Logo div */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-9 md:px-9 items-center justify-between w-full">
          <div className="flex flex-col items-center justify-center">
            <Hero />
          </div>
          <div className="flex flex-col items-center justify-center">
            <Image src="/homepage.webp" alt="mockup" width={250} height={250} className="object-cover" draggable={false} priority={true }/>
          </div>
        </div>

        {/* Mockup Image div */}
        <div className="w-full flex justify-center items-center mb-5">
        </div>
        {/* FAQ */}
        <div className="w-full py-3 my-3 flex justify-center items-center">
          <LazyFaq/>
        </div>
        {/* WaitList div */}
        <div className="w-full py-2 flex justify-center h-full">
          <LazyBackgroundBeams/>
        </div>
      </div>
    </div>
  );
}
