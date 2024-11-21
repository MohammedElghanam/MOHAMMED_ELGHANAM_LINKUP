import React from 'react'
import Background from '../[slug]/Background'
import Search from '../[slug]/Search'
import UserList from '../[slug]/UserList'
import MyInfo from '../[slug]/MyInfo'
import Chat from '../[slug]/Chat'

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
