const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 8080;

// Define the directory containing your files
const PHOTOS_DIR = path.join(__dirname, 'photos');

// Serve static files from the photos directory
app.use(express.static(PHOTOS_DIR));

// Endpoint to fetch the list of files in the photos directory
app.get('/filelist', (req, res) => {
    fs.readdir(PHOTOS_DIR, (err, files) => {
        if (err) {
            res.status(500).send('Unable to scan directory');
            return;
        }
        res.json(files); // Send the list of files as JSON
    });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running at http://localhost:${PORT}`);
});

