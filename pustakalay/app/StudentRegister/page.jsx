import Navbar from '@/components/Navbar'
import React from 'react'

const page = () => {
  return (
    <div className='w-[100%] h-[85%] overflow-y-scroll no-scrollbar'>
      <Navbar/>
    <div className='p-10'>
        <div className='text-center text-4xl font-semibold text-amber-600 mb-10'>Register a New Student</div>
        <form>

    <div class="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 text-amber-700">
  <div class="-mx-3 md:flex mb-6">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-name">
        Name
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-name" type="text" placeholder="John Doe"/>
      
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-branch">
        Branch
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-branch" type="text" placeholder="Computer Science"/>
    </div>
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-batch">
        Batch
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-batch" type="text" placeholder="2022"/>
    </div>
  </div>
  <div class="-mx-3 md:flex mb-6">
    
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-registration-no">
        Registration No
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-registration-no" type="text" placeholder="22030430039"/>
     
    </div>
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-email">
        E-mail
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-email" type="email" placeholder="john@gmail.com"/>
     
    </div>
    <div class="md:w-full px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-password">
        Password
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************"/>
     
    </div>
  </div>
  <div class="-mx-3 md:flex mb-2">
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-dob">
        Date of Birth
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-dob" type="date"/>
    </div>
    <div class="md:w-1/2 px-3 mb-6 md:mb-0">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-gender">
        Gender
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-gender" type="text" placeholder="Male"/>
    </div>
    
    <div class="md:w-1/2 px-3">
      <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" for="grid-phone">
        Phone No.
      </label>
      <input class="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-phone" type="text" placeholder="9876543210"/>
    </div>
  </div>
  
<div className='flex justify-center '>
    <button type='submit' className='border-2 rounded-2xl p-2 hover:bg-amber-700 hover:text-amber-50 border-amber-700 text-amber-800 text-center w-20'>Submit</button>
</div>
</div>
        </form>
</div>
    </div>
  )
}

export default page
