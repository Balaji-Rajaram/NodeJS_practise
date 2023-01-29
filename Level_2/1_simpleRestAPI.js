// Creating a simple REST API:

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/users', (req, res) => {
    const users = [
        { id: 1, name: 'John' },
        { id: 2, name: 'Jane' },
        { id: 3, name: 'Bob' },
    ];
    res.json(users);
});
app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));


// This example creates a simple Express.js server that listens on port 3000 and responds to two different routes:
// '/' and '/users'.The '/' route returns "Hello World!", while the '/users' route returns a JSON array of user objects.
