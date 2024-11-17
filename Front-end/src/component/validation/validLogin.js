
const validate = (email, password) => {
    const errors = {
        email: '',
        password: '',
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
        errors.email = 'Email is required';
    } else if (!emailPattern.test(email)) {
        errors.email = 'Please enter a valid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 8) {
      errors.password = 'Password must be at least 8 characters';
    }

    return errors; 
};

export { validate };