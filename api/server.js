const express = require('express');
const randomId = require('random-id');
const cors = require("cors")
const app = express(),
      bodyParser = require("body-parser");
const port = 3000;
      
const morgan = require('morgan')
app.use(morgan('combined'));

// place holder for thedata
const users = [];


app.use(bodyParser.json());
// app.use(cors)

app.use('/health', require('express-healthcheck')());

app.get('/api/users', (req, res) => {
  console.log('api/users called!!!!!!!')
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  user.id = randomId(10);
  console.log('Adding user:::::', user);
  users.push(user);
  res.json("user addedd");
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});