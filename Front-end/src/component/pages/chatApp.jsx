// import React, { useState, useEffect } from 'react';
// import io from 'socket.io-client';
import UserList from './UserList'; 
import ChatWindow from './ChatWindow'; 
import useWebSocket from '../../hooks/useWebSocket';

// const socket = io('ws://localhost:5002', {
//   transports: ['websocket'], 
// });

export default function ChatApp() {
  // const [selectedUser, setSelectedUser] = useState(null); 
  // const [messages, setMessages] = useState([]); 
  // const [newMessage, setNewMessage] = useState(''); 



  // useEffect(() => {
    
  //   socket.on('newMessage', (message) => {
  //     console.log('Received message:', message);
  //     if (message.senderId === selectedUser?.id || message.receiverId === selectedUser?.id) {
  //       setMessages((prev) => [...prev, message]);
  //     }
  //   });

  //   return () => {
  //     // socket.disconnect();
  //   };
  // }, [selectedUser]);

  // const fetchMessages = (user) => {
  //   setSelectedUser(user); 
  //   socket.emit('getMessages', { senderId: 'myUserId', receiverId: user.id }); 
  //   socket.on('messageHistory', (data) => { setMessages(data) }); 
  //   // console.log(data);
    
  // };

  // const sendMessage = () => {
  //   if (socket.connected) {  
  //     if (newMessage.trim() && selectedUser) {
  //       const data = {
  //         content: newMessage,
  //         senderId: 'myUserId',
  //         receiverId: selectedUser.id,
  //       };
  
  //       console.log(data);
  //       socket.emit('sendMessage', data); 
  //       setNewMessage(''); 
  //     }
  //   } else {
  //     console.log("Socket is not connected, please wait.");
  //   }
  // };

  const { selectedUser, messages, newMessage, setNewMessage, fetchMessages, sendMessage } = useWebSocket();
    

  return (
    <div className="flex h-screen">
      <div className="w-1/3 border-r border-gray-300">
        <UserList onSelectUser={fetchMessages} />
      </div>
      <div className="w-2/3">
        {selectedUser ? (
          <ChatWindow
            user={selectedUser}
            messages={messages}
            newMessage={newMessage}
            setNewMessage={setNewMessage}
            sendMessage={sendMessage}
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-gray-500">Select a user to start chatting</p>
          </div>
        )}
      </div>
    </div>
  );
}
