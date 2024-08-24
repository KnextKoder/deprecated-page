import React from 'react'

const WaitlistForm = () => {
  return (
    <form action="https://submit-form.com/wiDdM39Bw" className='flex flex-col w-1/2 mx-auto justify-center items-center bg-transparent z-50' id='form'>

      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-500 font-semibold mb-2">Name</label>
        <input type="text" id="name" name="name" placeholder="John Apple" required className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" autoComplete='true'/>
      </div>

      <div className="mb-4">  
        <label htmlFor="email" className="block text-gray-500 font-semibold mb-2">Email</label>
        <input type='email' id="email" name="email" placeholder="mail@example.com" required className="px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" autoComplete='true'/>
      </div>
      
      <div className='flex flex-col justify-center items-start'>
        <label htmlFor="position" className="block text-gray-500 font-semibold mb-2">Role</label>
        <select id="position" name="position" required className='border rounded-md px-3 py-2 w-[270px] md:w-[270px] focus:outline-none focus:border-blue-500 text-gray-900' defaultValue={'student'}>
          <option value="none">None</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent or Guardian</option>
        </select>
      </div>
      
      <button type="submit" className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-[#c4c7c5] transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 mt-5 cursor-pointer">Submit</button>
    </form>
  )
}

export default WaitlistForm

