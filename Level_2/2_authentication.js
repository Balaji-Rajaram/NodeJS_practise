// Implementing authentication:

const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const secret = 'mysecret';
const port = 3000;

app.use(express.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // check if the username and password match the expected values
    if (username === 'admin' && password === 'password') {
        // create a token
        const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
        res.json({ token });
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

app.get('/users', (req, res) => {
    const token = req.headers.authorization;
    try {
        // verify the token and get the decoded payload
        const decoded = jwt.verify(token, secret);
        res.json([{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }]);
    } catch (err) {
        res.status(401).json({ message: 'Invalid token' });
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// This example adds a login endpoint to the server that verifies the provided username and password,
// and if they are correct, it generates a JSON Web Token(JWT) and sends it back to the client.
// The client then needs to include this token in the Authorization header when making requests to protected routes,
// like the '/users' route.The server then verifies the token using the jwt.verify function and only returns the data if the token is valid.