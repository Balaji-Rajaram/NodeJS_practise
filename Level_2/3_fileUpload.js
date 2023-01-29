// Uploading files:

const express = require('express');
const app = express();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const port = 3000;

app.post('/upload', upload.single('file'), (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'No file provided' });
    } else {
        res.status(200).json({ message: `File uploaded: ${req.file.originalname}` });
    }
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
