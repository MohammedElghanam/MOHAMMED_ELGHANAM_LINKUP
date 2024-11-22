import { useEffect, useState } from "react";
import axios from "axios";
const useUsers = () => {

    const [users, setUsers] = useState([]);

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
                console.log(response.data.data);                
            } catch (error) {
                console.error("Error fetching users:", error);
            }

        }

        fetchUsers();

    }, []);

    return { users }
}

export default useUsers;