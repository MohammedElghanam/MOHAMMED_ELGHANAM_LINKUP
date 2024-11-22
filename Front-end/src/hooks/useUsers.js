import { useEffect, useState } from "react";
import axios from "axios";

const useUsers = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState(""); 
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:5000/auth/getUsers', {
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

    return { users, searchTerm, setSearchTerm, filteredUsers };
}

export default useUsers;
