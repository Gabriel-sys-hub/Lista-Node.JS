const express = require('express');
const cors = require('cors');

const { v4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.body;

  const filterIfUserNameExist = users.find((each) => each.username === username);

  if (filterIfUserNameExist) return response.status(400).send({ error: "User already exists"});

  next();
}

app.post('/users', checksExistsUserAccount,  (request, response) => {
  const { name, username } = request.body;

  const id = v4();

  users.push({
    id,
    name,
    username,
    todos: []
  })

  return response.status(201).json(users[0]);
});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;