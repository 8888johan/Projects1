const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to serve static files
app.use(express.static('public'));

// Route for test
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
