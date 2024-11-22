import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('ws://localhost:5002', {
    transports: ['websocket'],
});

const useWebSocket = () => {
    const [selectedUser, setSelectedUser] = useState(null); 
    const [messages, setMessages] = useState([]); 
    const [newMessage, setNewMessage] = useState('');

    useEffect(() => {
        socket.on('newMessage', (message) => {
            console.log('Received message:', message);
            if (message.senderId === selectedUser?._id || message.receiverId === selectedUser?._id) {
                setMessages((prev) => [...prev, message]);
            }
        });

        return () => {           
            socket.off('newMessage');
        };
    }, [selectedUser]);

    const fetchMessages = (user) => {
        setSelectedUser(user);
        socket.emit('getMessages', { senderId: 'myUserId', receiverId: user._id }); 
        socket.on('messageHistory', (data) => {
            console.log('Message history:', data);
            setMessages(data);
        });

        return () => {
            
            socket.off('messageHistory');
        };
    };

    const sendMessage = () => {
        if (socket.connected) {
            if (newMessage.trim() && selectedUser) {
                const tokenId = getUserIdFromToken();
                console.log(tokenId);
                
                const data = {
                    content: newMessage,
                    senderId:  tokenId, 
                    receiverId: selectedUser._id,
                };

                console.log('Sending message:', data);
                socket.emit('sendMessage', data); 
                setNewMessage('');
            }
        } else {
            console.log('Socket is not connected, please wait.');
        }
    };

    const getUserIdFromToken = () => {

        const token = localStorage.getItem('token');
        
        try {
            if (token) {
                const decodedToken = JSON.parse(atob(token.split('.')[1]));
                return decodedToken?.userId || null;
            }
        } catch (error) {
          console.error('Error decoding token:', error);
          return null;
        }
      };

    return {
        selectedUser,
        messages,
        newMessage,
        setNewMessage,
        fetchMessages,
        sendMessage,
    };
};

export default useWebSocket;
