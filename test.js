const axios = require('axios');

async function saveNewUser(username, password) {
    username = "ayush1";
    password = "1234567";
    try {
        const response = await axios.post('http://localhost:3000/users', {
            username,
            password
        });
        if (response.data.msg === 'pass') {
            console.log('User created successfully!');
            console.log('User ID:', response.data._id);
            console.log('Username:', response.data.username);
        } else {
            console.log('Failed to create user:', response.data.error);
        }
    } catch (error) {
        console.error('Error creating user:', error.response ? error.response.data : error.message);
    }
}

async function loginUser(username, password) {
    username = "ayushssshhh1";
    password = "1234567d";
    try {
        const response = await axios.post('http://localhost:3000/users/login', {
            username,
            password
        }); 

        console.log(response);

        if (response.data.msg == 'pass') {
            console.log('Login successful!');
            console.log('User ID:', response.data._id);
        } else {
            console.log('Login failed:', response.data.error);
        }
    } catch (error) {
        console.error('Error logging in:', error.response ? error.response.data : error.message);
    }
}

// Example usage:
loginUser('testuser', 'password123');
// saveNewUser('testuser', 'password123');



