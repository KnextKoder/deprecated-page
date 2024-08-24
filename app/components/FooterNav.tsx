import React from 'react'
import Link from 'next/link'

const FooterNavigation = () => {
  return (
    <div>
        <nav className="mt-4 md:mt-0 text-sm md:mr-10">
          <ul className="flex flex-col md:flex-row space-x-4">
            <Link
              href={"/"}
              className="ml-4 hover:underline"
            >
              Home
            </Link>
            <Link
              href={"/features"}
              className="hover:underline"
            >
              Features
            </Link>
            <Link
              href={"/about"}
              className="hover:underline"
            >
              Blog
            </Link>
            <Link
              href={"/pricing"}
              className="hover:underline"
            >
              Pricing
            </Link>
            {/* ... other navigation links */}
          </ul>
        </nav>
    </div>
  )
}


const FooterNav = () => {
  return (
    <div>
        <nav className="mt-4 md:mt-0 text-sm">
          <ul className="flex flex-col md:flex-row space-x-4">
            <Link
              href={"/"}
              className="ml-4 hover:underline"
            >
              Terms
            </Link>
            <Link
              href={"/about"}
              className="hover:underline"
            >
              About
            </Link>
            <Link
              href={"/features"}
              className="hover:underline"
            >
              Privacy
            </Link>
            <Link
              href={"/pricing"}
              className="hover:underline"
            >
              Contact
            </Link>
            {/* ... other navigation links */}
          </ul>
        </nav>

    </div>
  )
}

export {FooterNav, FooterNavigation}