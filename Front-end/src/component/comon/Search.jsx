import React from 'react'

export default function Search({ searchTerm, setSearchTerm }) {
  return (
    <>
        <div className=" w-full rounded-xl bg-gray-400 bg-opacity-15 p-3">
            <div className=" flex justify-between items-center">
                <h1 className=' text-white font-medium text-2xl'> Chats</h1>
                <div className=" w-8 h-8 rounded-md bg-gray-300 bg-opacity-15 flex justify-center items-center border border-gray-500"> <i class="fa-solid fa-plus fa-lg" style={{ color: '#ffffff'}}></i> </div>
            </div>
            <div className=" flex justify-start gap-3">
                <h1 className=' p-1 border-b-2 border-[#FF00A6] text-white text-sm'>Messages</h1>
                <h1 className=' p-1 text-white text-sm '>Groups</h1>
            </div>
            <div className=" relative pt-3">
                <input 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} 
                    type="text" 
                    className=' w-full h-10 rounded-md border border-gray-400 bg-white bg-opacity-5 pl-2' 
                    placeholder=' Search ...' 
                />
                <div className=" w-6 h-6 absolute top-5 right-3"> <i class="fa-solid fa-magnifying-glass fa-lg text-gray-400"></i> </div>
            </div>
        </div> 
    </>
  )
}
