import React from 'react'
import useUsers from '../../hooks/useUsers'

export default function UserList() {

    const { users } = useUsers();

    return (
    <>
        <div className="w-full h-[490px] flex flex-col gap-3 rounded-xl p-2 overflow-y-auto snap-y snap-mandatory" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }} >

            {users.map((user) => (
                <div key={user.id} className=" flex justify-between items-center gap-3 snap-center">
                    <div className=" flex justify-start items-center gap-3 ">
                        <div className=" w-12 h-12 rounded-full bg-red-500">
                            <img className=' rounded-full ' src="/default.jpg" alt="" />
                        </div>
                        <div className="">
                            <h1 className=' font-medium text-gray-300'>{user.name}</h1>
                            <p className=' text-gray-500'>{user.email}</p>
                        </div>
                    </div>
                    <div className=" w-6 h-6 rounded-full bg-[#FF00A6] flex justify-center items-center text-white font-bold ">1</div>
                </div>
            ))}

        </div> 
    </>
  )
}
