import { useEffect } from 'react'
import React from 'react'
import Background from '../comon/Background'
import Search from '../comon/Search'
import UserList from '../comon/UserList'
import MyInfo from '../comon/MyInfo'
import Chat from '../comon/Chat'
import useWebSocket from '../../hooks/useWebSocket'
import useUsers from '../../hooks/useUsers';

export default function Test({ userData }) {

    const { selectedUser, messages, newMessage, setNewMessage, fetchMessages, sendMessage, setAuth } = useWebSocket();
    const { searchTerm, setSearchTerm, filteredUsers } = useUsers();

    useEffect(() => {
        setAuth(userData.userId);
    }, []);
  return (
    <> 
        <div className=" w-full h-screen flex flex-col justify-start items-center fixed bg-gray-900">

            <Background />

            <div className=" w-full h-full flex justify-start items-center">
                <div className=" grid grid-cols-12 w-full h-full">
                    <div className=" flex flex-col justify-between col-span-3 p-2">

                        <div className=" flex flex-col justify-center items-center gap-2 h-full">

                            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

                            <UserList onSelectUser={fetchMessages} users={filteredUsers} />

                        </div>

                        <MyInfo userData={userData} />

                    </div>

                    <div className=" col-span-9">
                    {selectedUser ? (
                        <Chat 
                            user={selectedUser}
                            messages={messages}
                            newMessage={newMessage}
                            setNewMessage={setNewMessage}
                            sendMessage={sendMessage}
                            userData={userData}
                         />
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-500">Select a user to start chatting</p>
                        </div>
                    )}
                        
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}
