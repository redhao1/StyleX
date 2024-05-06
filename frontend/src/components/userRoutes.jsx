// Import necessary modules
const express = require('express');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');


const app = express();


app.use(express.json());


mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String
});
const User = mongoose.model('User', userSchema);


app.post('/api/register', async (req, res) => {
    try {

        const { firstName, lastName, email, password } = req.body;


        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ error: 'User already exists' });
        }


        const hashedPassword = await bcrypt.hash(password, 10);


        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword
        });


        await newUser.save();


        return res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
