const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send("I'm Jorge and I'm learning about Kubernetes and it's awesome!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
