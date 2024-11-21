import React from 'react';

export default function ChatWindow({ user, messages, newMessage, setNewMessage, sendMessage }) {
  return (
    <div className="flex flex-col h-full">
      <div className="p-4 bg-blue-500 text-white font-bold">{user.name}</div>
      <div className="flex-1 overflow-y-scroll p-4 bg-gray-100">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 mb-2 rounded ${
              msg.senderId === 'myUserId' ? 'bg-blue-500 text-white self-end' : 'bg-gray-300'
            }`}
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className="p-4 border-t flex">
        <input
          type="text"
          className="flex-1 border p-2 rounded"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message..."
        />
        <button
          onClick={sendMessage}
          className="ml-2 bg-blue-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
