const axios = require('axios'); // missing in package.json
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  const result = await axios.get('https://api.github.com');
  res.send(`GitHub API is up! ${result.status}`);
});

app.listen(PORT, () => console.log('Server ready'));
