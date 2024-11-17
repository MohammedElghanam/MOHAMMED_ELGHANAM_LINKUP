import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { validate } from '../component/validation/validLogin';
import axios from "axios";

const useLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({email: '', password: '' });
    const [errorMessage, setErrorMessage] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationErrors = validate(email, password);
        setErrors(validationErrors);

        if (!validationErrors.email && !validationErrors.password) {

            const formData = { email, password}
            try {
                const response = await axios.post('http://localhost:5000/auth/login', formData);

                if (response.status === 200) {
                    console.log('dkhal hna');
                    console.log(response);
                    
                    
                    setEmail('');
                    setPassword('');
                    localStorage.setItem('token', response.data.token);
                    navigate('/chat')
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setErrorMessage(error.response.data.message);
                    console.log('Error registering user:', error.response.data.message);
                } else {
                    console.log('error');
                    
                    setErrorMessage('An unexpected error occurred');
                    console.log('Error registering user:', error.response.data.message);
                }
            }            
        }

    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        errorMessage,
        setErrorMessage
    }
}

export default useLogin;