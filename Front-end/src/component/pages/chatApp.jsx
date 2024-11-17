import React, { useState } from 'react';

export default function ChatApp () {
    const [messages, setMessages] = useState([
        { id: 1, user: 'John', text: 'Hello there!' },
        { id: 2, user: 'You', text: 'Hi, how are you?' },
    ]);
    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim() === '') return;

        setMessages([...messages, { id: messages.length + 1, user: 'You', text: newMessage }]);
        setNewMessage('');
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            {/* Chat Container */}
            <div className="w-full max-w-md bg-white rounded-lg shadow-md overflow-hidden">
                {/* Header */}
                <div className="bg-blue-600 text-white text-lg font-semibold p-4">
                    Chat Room
                </div>

                {/* Messages */}
                <div className="p-4 h-80 overflow-y-auto">
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`mb-2 p-2 rounded-lg ${
                                message.user === 'You' ? 'bg-blue-100 text-right' : 'bg-gray-200 text-left'
                            }`}
                        >
                            <p className="text-sm font-semibold">{message.user}</p>
                            <p>{message.text}</p>
                        </div>
                    ))}
                </div>

                {/* Input */}
                <div className="flex p-4 border-t border-gray-200">
                    <input
                        type="text"
                        placeholder="Type your message..."
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};