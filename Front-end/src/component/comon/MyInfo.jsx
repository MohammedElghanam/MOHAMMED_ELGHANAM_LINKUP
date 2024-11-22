import React from 'react'

export default function MyInfo({ userData }) {
  return (
    <>
        <div className=" w-full h-[75px] flex justify-between items-center gap-4 px-3 bg-gray-400 bg-opacity-15 hover:bg-opacity-40 rounded-lg">
            <div className=" flex justify-start items-center gap-3">
                <div className=" relative w-12 h-12 rounded-full">
                    <img className=' rounded-full ' src="/default.jpg" alt="" />
                    <div className=" w-4 h-4 rounded-full bg-green-600 absolute bottom-0 right-0"></div>
                </div>
                <div className="">
                    <h1 className=' font-medium text-gray-300'> { userData.name } </h1>
                    <p className=' text-gray-300'>{ userData.email } </p>
                </div>
            </div>
            <div className=" w-10 h-10 flex justify-center items-center "> <i class="fa-solid fa-gear fa-xl text-gray-500"></i> </div>
        </div> 
    </>
  )
}
