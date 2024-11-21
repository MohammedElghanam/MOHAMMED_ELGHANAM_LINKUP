import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import { v4 as uuidv4 } from 'uuid';

const socket = io('ws://localhost:5003');

export default function ChatWithAnas() {
  const [userId, setUserId] = useState(null);
  const [selectedUser, setSelectedUser] = useState({ id: 'anasId', name: 'Anas' });
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [localStream, setLocalStream] = useState(null);
  const [remoteStream, setRemoteStream] = useState(null);
  const peerConnection = useRef(null);

  useEffect(() => {
    // Set user ID
    let id = localStorage.getItem('userId');
    if (!id) {
      id = uuidv4();
      localStorage.setItem('userId', id);
    }
    setUserId(id);

    // Listen for incoming messages
    socket.on('receiveMessage', (message) => {
      if (message.receiverId === id || message.senderId === id) {
        setMessages((prev) => [...prev, message]);
      }
    });

    // Handle WebRTC offer
    socket.on('receiveOffer', async ({ offer, senderId }) => {
      if (senderId === selectedUser.id) {
        const pc = createPeerConnection();
        await pc.setRemoteDescription(new RTCSessionDescription(offer));
        const answer = await pc.createAnswer();
        await pc.setLocalDescription(answer);

        socket.emit('sendAnswer', { answer, senderId: userId, receiverId: senderId });
      }
    });

    // Handle WebRTC answer
    socket.on('receiveAnswer', async ({ answer }) => {
      await peerConnection.current.setRemoteDescription(new RTCSessionDescription(answer));
    });

    // Handle ICE candidates
    socket.on('receiveCandidate', async ({ candidate }) => {
      if (candidate) {
        await peerConnection.current.addIceCandidate(new RTCIceCandidate(candidate));
      }
    });

    return () => {
      // Cleanup socket listeners
      socket.off('receiveMessage');
      socket.off('receiveOffer');
      socket.off('receiveAnswer');
      socket.off('receiveCandidate');
    };
  }, [selectedUser]);

  const createPeerConnection = () => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }],
    });

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        socket.emit('sendCandidate', {
          candidate: event.candidate,
          senderId: userId,
          receiverId: selectedUser.id,
        });
      }
    };

    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    peerConnection.current = pc;
    return pc;
  };

  const sendMessage = () => {
    if (newMessage.trim() && selectedUser) {
      const message = {
        senderId: userId,
        receiverId: selectedUser.id,
        content: newMessage,
      };
      setMessages((prev) => [...prev, message]);
      socket.emit('sendMessage', message);
      setNewMessage('');
    }
  };

  const startCall = async () => {
    if (selectedUser) {
      const pc = createPeerConnection();
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setLocalStream(stream);

      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      socket.emit('sendOffer', { offer, senderId: userId, receiverId: selectedUser.id });
    }
  };

  useEffect(() => {
    
    return () => {};
    
  }, []);

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <h1 className="text-center text-3xl font-bold text-gray-800 py-4">Chat with {selectedUser.name}</h1>

      <div className="flex flex-col flex-grow bg-white shadow-md rounded-lg mx-4 md:mx-auto max-w-3xl">
        <div className="messages flex-grow overflow-y-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`p-3 max-w-sm rounded-lg shadow-md ${
                msg.senderId === userId
                  ? 'bg-blue-500 text-white self-end'
                  : 'bg-gray-200 text-gray-900 self-start'
              }`}
            >
              {msg.content}
            </div>
          ))}
        </div>

        <div className="flex items-center border-t border-gray-300 p-4">
          <input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
          <button
            onClick={sendMessage}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Send
          </button>
          <button
            onClick={startCall}
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 focus:outline-none"
          >
            Call
          </button>
        </div>
      </div>

      <div className="flex justify-center mt-4">
        {localStream && (
          <video
            className="w-1/2 border rounded-lg"
            autoPlay
            muted
            ref={(video) => video && (video.srcObject = localStream)}
          />
        )}
        {remoteStream && (
          <video
            className="w-1/2 border rounded-lg"
            autoPlay
            ref={(video) => video && (video.srcObject = remoteStream)}
          />
        )}
      </div>
    </div>
  );
}
