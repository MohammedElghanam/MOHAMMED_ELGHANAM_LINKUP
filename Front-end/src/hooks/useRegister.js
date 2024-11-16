import { useState } from "react";
import axios from "axios";
import { validate } from '../component/validation/validRegister';

const useRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setsuccessMessage] = useState('');
    const [errors, setErrors] = useState({ name: '', email: '', password: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();

        setErrors({ name: '', email: '', password: '' });
        const validationErrors = validate(name, email, password);
        setErrors(validationErrors);

        if (!validationErrors.name && !validationErrors.email && !validationErrors.password) {
            setErrorMessage('');
            setsuccessMessage('');

            const formData = { name, email, password}

            try {
                const response = await axios.post('http://localhost:5000/auth/register', formData, {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })

                if (response.status === 201) {
                    setName('');
                    setEmail('');
                    setPassword('');

                    setsuccessMessage(response.data.message);
                    console.log(response.data.user);
                    // alert(response.data.message);
                }

            } catch (error) {
                if (error.response && error.response.status === 400) {
                    setErrorMessage(error.response.data.message);
                    // alert(error.response.data.message);
                    console.log('Error registering user:', error.response.data.message);
                } else {
                    setErrorMessage('An unexpected error occurred');
                    console.log('Error registering user:', error.response.data.message);
                }
            }
        }
        
    };

    return {
        name, setName,
        email, setEmail,
        password, setPassword,
        handleSubmit,
        errorMessage, setErrorMessage,
        successMessage, setsuccessMessage,
        errors
    };
}
export default useRegister;