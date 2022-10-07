const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Welcome!</h1>
    <h3>Kubernetes Course</h3>
    <p>I'm currently learning Kubernetes and it is awesome.</p>
  `);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
