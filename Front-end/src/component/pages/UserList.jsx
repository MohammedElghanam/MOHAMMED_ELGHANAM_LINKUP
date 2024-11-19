import React from 'react';

export default function UserList({ onSelectUser }) {
  const users = [
    { id: '1', name: 'Anas' },
    { id: '2', name: 'Nihal' },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Friends</h2>
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-2 border rounded cursor-pointer hover:bg-gray-100"
            onClick={() => onSelectUser(user)}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
