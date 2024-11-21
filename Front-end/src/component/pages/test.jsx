import React from 'react'
import Background from '../comon/Background'
import Search from '../comon/Search'
import UserList from '../comon/UserList'
import MyInfo from '../comon/MyInfo'
import Chat from '../comon/Chat'

export default function Test() {
  return (
    <> 
        <div className=" w-full h-screen flex flex-col justify-start items-center fixed bg-gray-900">

            <Background />

            <div className=" w-full h-full flex justify-start items-center">
                <div className=" grid grid-cols-12 w-full h-full">
                    <div className=" flex flex-col justify-between col-span-3 p-2">

                        <div className=" flex flex-col justify-center items-center gap-2 h-full">

                            <Search />

                            <UserList />

                        </div>

                        <MyInfo />

                    </div>

                    <div className=" col-span-9">
                        <Chat />
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
