
const express = require('express');


const app = express();

app.use(express.json());

app.post('/api/register', (req, res) => {

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    return res.status(200).json({ message: 'User registered successfully', data: req.body });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
