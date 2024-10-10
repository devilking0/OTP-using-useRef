import React, { useRef, useState } from 'react'
import Fields from './Fields'




const OtpBody = () => {

    const [otp, setOtp] =useState({one:"", two:"", three:"", four:""})
    const first = useRef("")
    const second = useRef("")
    const third = useRef("")
    const fourth = useRef("")




  return (
    <div className='flex w-full h-[92vh]  md:h-[43rem] bg-slate-300 justify-center items-center'>
      <div className='bg-gray-800 w-[20rem] h-[20rem] rounded-md'>
        <h2 className='text-white text-4xl text-center'>Enter OTP</h2>
        <Fields/>
      </div>
    </div>
  )
}

export default OtpBody
