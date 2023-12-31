'use client'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import React, { useState } from 'react'

const page = () => {

  const [formData, setFormData] = useState({
    email: '',
    name: '',
    password: '',
    branch: '',
    batch: '',
    reg_no: '',
    dob: '',
    gender: '',
    phone: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  const handleStudentRegister = async () => {
    try {
      const userData = localStorage.getItem('user');

      if (userData) {
        const user = JSON.parse(userData);
        const token = user.token;

        const resp = await axios.post('https://pustakalay-backend.vercel.app/librarian/register/student', formData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          }
        });

        console.log(resp);
      }
      else {
        console.log('error')
      }


    } catch (error) {
      console.log("error", error);
    }
  }


  return (
    <div>
      <Navbar />
      <div className='p-10'>
        <div className='text-center text-4xl font-semibold text-amber-600 mb-10'>Register a New Student</div>
        <form>

          <div className="bg-white shadow-2xl rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2 text-amber-700">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-name">
                  Name
                </label>
                <input name='name' value={formData.name} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-red rounded py-3 px-4 mb-3" id="grid-name" type="text" placeholder="John Doe" />

              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-branch">
                  Branch
                </label>
                <input name='branch' value={formData.branch} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-branch" type="text" placeholder="Computer Science" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-batch">
                  Batch
                </label>
                <input name='batch' value={formData.batch} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-batch" type="text" placeholder="2022" />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">

              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-reg">
                  Registraion No
                </label>
                <input name='reg_no' value={formData.reg_no} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-reg" type="text" placeholder="1234345678" />

              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-email">
                  E-mail
                </label>
                <input name='email' value={formData.email} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-email" type="email" placeholder="john@gmail.com" />

              </div>
              <div className="md:w-full px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-password">
                  Password
                </label>
                <input name='password' value={formData.password} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4 mb-3" id="grid-password" type="password" placeholder="******************" />

              </div>
            </div>
            <div className="-mx-3 md:flex mb-2">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-dob">
                  Date of Birth
                </label>
                <input name='dob' value={formData.dob} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-dob" type="date" />
              </div>
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-gender">
                  Gender
                </label>
                <input name='gender' value={formData.gender} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-gender" type="text" placeholder="Male" />
              </div>

              <div className="md:w-1/2 px-3">
                <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-phone">
                  Phone No.
                </label>
                <input name='phone' value={formData.phone} onChange={handleChange} className="appearance-none block w-full bg-grey-lighter text-grey-darker border border-grey-lighter rounded py-3 px-4" id="grid-phone" type="text" placeholder="9876543210" />
              </div>
            </div>

            <div className='flex justify-center '>
              <button onClick={handleStudentRegister} type='reset' className='border-2 rounded-2xl p-2 hover:bg-amber-700 hover:text-amber-50 border-amber-700 text-amber-800 text-center w-20'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default page



// {
//   "email": "riya@gmail.com",
//   "name": "Riya Jha",
//   "password": "riya@123",
//   "branch": "Electrical Engineering",
//   "batch": "2022",
//   "reg_no": "22030430018",
//   "dob": "2003-08-10",
//   "gender": "Female",
//   "phone": "9875623789"
// }
