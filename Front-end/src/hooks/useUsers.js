import { useEffect, useState } from "react";
import axios from "axios";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [saveUser, setsetSaveUser] = useState({});

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');

                const response = await axios.post('http://localhost:5000/auth/getUsers', { saveUser }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setUsers(response.data.data);
                setFilteredUsers(response.data.data); 
                console.log(response.data.data);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchUsers();
    }, []);

    
    useEffect(() => {
        const filtered = users.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [searchTerm, users]); 

    const saveUserId = (user) => {
        setsetSaveUser(user);
    }

    return { users, searchTerm, setSearchTerm, filteredUsers, saveUserId };
}

export default useUsers;
