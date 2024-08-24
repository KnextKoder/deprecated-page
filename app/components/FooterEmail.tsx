'use client'

import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"

const FooterEmail = () => {

    const handleEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); // Prevent default form submission
        const target = e.target as HTMLFormElement; 
        console.log(target.email.value); 
      };

  return (
    <div className="hover:scale-110 transition-transform">
          <form onSubmit={handleEmail} className="w-fit">
            <label htmlFor="email" className="sr-only">Enter your email</label> 
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="bg-gray-300 p-2"
              autoComplete="email"
            />
            <button type="submit" className="bg-gray-300 p-2">
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </div>
  )
}

export default FooterEmail