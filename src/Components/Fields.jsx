import React, { useRef, useState } from 'react';

const Fields = () => {
  const [otp, setOtp] = useState({ one: '', two: '', three: '', four: '' });
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  const handleChange = (e, field) => {
    const value = e.target.value;

    // Check if the value is a single-digit number (0-9)
    if (value >= '0' && value <= '9' && value.length === 1) {
      setOtp({ ...otp, [field]: value });

      // Automatically move to the next input if filled and the input is not empty
      if (field === 'one' && value) second.current.focus();
      if (field === 'two' && value) third.current.focus();
      if (field === 'three' && value) fourth.current.focus();
    } else if (value === '') {
      // Allow user to delete a value and stay in the current field
      setOtp({ ...otp, [field]: value });
    }
  };


  const handleSubmit = () => {
    // Show an alert with the JSON string of the OTP state
    if(otp.one==='' || otp.two==='' || otp.three==='' || otp.four==='')
    {
        alert("Fill OTP Correctly")
    }
    else
    alert(JSON.stringify(otp));
  };

  return (
    <div className='w-full h-full flex flex-col items-center justify-center gap-4 relative -top-[1rem]'>
      <div className='flex gap-3'>
        {/* First field */}
        <input
          type='text'
          className='w-12 h-12 text-4xl text-center'
          value={otp.one}
          onChange={(e) => handleChange(e, 'one')}
          ref={first}
          placeholder=''
        />

        {/* Second field */}
        <input
          type='text'
          className='w-12 h-12 text-4xl text-center'
          value={otp.two}
          onChange={(e) => handleChange(e, 'two')}
          ref={second}
          placeholder=''
        />

        {/* Third field */}
        <input
          type='text'
          className='w-12 h-12 text-4xl text-center'
          value={otp.three}
          onChange={(e) => handleChange(e, 'three')}
          ref={third}
          placeholder=''
        />

        {/* Fourth field */}
        <input
          type='text'
          className='w-12 h-12 text-4xl text-center'
          value={otp.four}
          onChange={(e) => handleChange(e, 'four')}
          maxLength={1}
          ref={fourth}
          placeholder=''
        />
      </div>

      {/* Submit Button */}
      <button
        className='bg-blue-500 text-white px-4 py-2 rounded'
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default Fields;
