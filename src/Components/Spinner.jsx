import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center mx-auto mt-[150px] space-y-4">
        <div className="custom-loader"></div>
        <p className='text-bgDark text-lg font-semibold'>Loading....</p>
      </div>
    </>
  );
}

export default Spinner