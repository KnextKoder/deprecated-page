// import { faFaceAngry } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";
import FooterEmail from "./FooterEmail";
import {FooterNav, FooterNavigation} from "./FooterNav";



interface FooterProps {
  // Add any props your footer component might need
}

const Footer: React.FC<FooterProps> = ({ /* props */ }) => {

  return (
    <footer className="text-slate-800 py-8 bg-gray-50 static bottom-0">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Email Section */}
        <FooterEmail/>

        {/* Navigation links */}
        <FooterNavigation/>

        {/* Social media links */}
        <div className="flex mt-4 md:mt-0 space-x-4">
        <Link
            href={"/"}
            className="hover:opacity-75"
          >
            <Image
              src="/linkedin.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          
          <Link
            href={"/"}
            className="hover:opacity-75"
          >
            <Image
              src="/twitter.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>

          <Link
            href={"/"}
            className="hover:opacity-75"
          >
            <Image
              src="/linkedin.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>

          <Link
            href={"/"}
            className="hover:opacity-75"
          >
            <Image
              src="/twitter.png"
              alt="Facebook"
              width={24}
              height={24}
            />
          </Link>
          {/* ... other social media links */}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-200 my-4"></div>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Navigation links */}
        <FooterNav/>

        {/* Logo section */}
        <div>
          <Link href={"/"} className="flex items-center">
            <Image src={"/logo.svg"} alt="Company Logo" className="h-8 mr-2" width={35} height={35}/>
            <span className="font-bold text-xl">RUBIX</span>
          </Link>
        </div>
        
        {/* Copyright information */}
        <p className="text-sm text-center md:text-right">
          &copy; {new Date().getFullYear()} RUBIX. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

