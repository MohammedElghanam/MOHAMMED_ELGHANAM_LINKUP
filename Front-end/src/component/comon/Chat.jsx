import React from 'react'

export default function Chat() {
  return (
    <>
        <div className="flex flex-col h-full bg-gray-100 bg-opacity-5">

            <div className="px-4 py-2 text-white border-b border-gray-500">
                <div className=" flex justify-between items-center gap-3 ">
                    <div className=" flex justify-start items-center gap-3 ">
                        <div className=" w-11 h-11 rounded-full">
                            <img className=' rounded-full ' src="/default.jpg" alt="" />
                        </div>
                        <div className="">
                            <h1 className=' font-bold' >ANAS</h1>
                            <p className=' text-sm text-gray-500' >azertyui kjhgfs</p>
                        </div>
                    </div>
                    <div className=" flex justify-center items-center gap-3">
                        <div className=" w-9 h-9 rounded-md flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 hover:duration-500 hover:transform"> <i class="fa-solid fa-video fa-lg text-gray-300"></i> </div>
                        <div className=" w-9 h-9 rounded-md flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 hover:duration-500 hover:transform"> <i class="fa-solid fa-phone fa-lg text-gray-300"></i> </div>
                        <div className=" w-9 h-9 rounded-md flex justify-center items-center hover:bg-gray-400 hover:bg-opacity-20 hover:duration-500 hover:transform"> <i class="fa-solid fa-ellipsis-vertical fa-lg text-gray-300"></i> </div>
                    </div>
                </div>
            </div>

            <div className="flex-1 justify-start justify-items-stretch p-4 overflow-y-auto snap-y snap-mandatory " style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                <div className=" flex justify-start items-start gap-3">
                    <div className=" w-10 h-10">
                        <img className=' rounded-full ' src="/default.jpg" alt="" />
                    </div>
                    <div className='p-2 mb-2 rounded max-w-[70%] bg-gray-400 bg-opacity-10 text-gray-200 relative' >
                        slm cv  Use justify-self-end to align a grid item to the end of its inline axis:
                        Use justify-self-end to align a grid item to the end of its inline axis:
                    </div>
                </div>
                <div className=" flex justify-end items-start gap-3">
                    <div className='p-2 mb-2 rounded max-w-[70%] bg-[#FF00A6] text-white' >
                        slm cv Use justify-self-end to align a grid item to the end of its inline axis:
                    </div>                                
                    <div className=" w-10 h-10">
                        <img className=' rounded-full ' src="/default.jpg" alt="" />
                    </div>
                </div>
            </div>

            <div className="px-4 py-2 border-t border-gray-500 flex gap-2">
                <div className="flex-1 relative ">
                    <input type="text" className=" w-full border border-gray-500 p-2 rounded bg-gray-50 bg-opacity-0" placeholder="Write a message..." />
                    <div className=" absolute top-1 right-2 flex gap-1 justify-center items-center">
                        <div className=" w-8 h-8 flex justify-center items-center text-gray-300"> <i class="fa-solid fa-image fa-lg"></i> </div>
                        <div className=" w-8 h-8 flex justify-center items-center text-gray-300"> <i class="fa-regular fa-face-smile fa-lg"></i> </div>
                    </div>
                </div>
                <div className=" flex justify-center items-center gap-1">
                    <div className=" w-8 h-8 flex justify-center items-center text-gray-300"> <i class="fa-solid fa-microphone fa-lg"></i> </div>
                    <button className="ml-2 p-2 rounded flex justify-center items-center text-[#FF00A6]" > <i class="fa-solid fa-paper-plane fa-lg"></i> </button>
                </div>
            </div>

        </div> 
    </>
  )
}
