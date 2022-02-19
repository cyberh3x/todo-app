const {
    GET_ALL_ITEMS,
    ADD_ITEM,
    DELETE_ITEM,
    UPDATE_ITEM,
    EDIT_ITEM,
  } = require("../constant/routes"),
  express = require("express"),
  app = express.Router(),
  repository = require("../repositories/TodoRepositories");

app.get(GET_ALL_ITEMS, (req, res) => {
  repository
    .findAll()
    .then((todos) => res.json(todos))
    .catch((error) => console.log(error));
});

app.post(ADD_ITEM, (req, res) => {
  const { name } = req.body;
  repository
    .create(name)
    .then((todo) => res.json(todo))
    .catch((error) => console.log(error));
});

app.get(EDIT_ITEM, (req, res) => {
  const { id } = req.params;
  repository
    .findById(id)
    .then((todo) => res.json(todo))
    .catch((error) => console.log(error));
});

app.delete(DELETE_ITEM, (req, res) => {
  const { id } = req.params;
  repository
    .deleteById(id)
    .then((todo) => res.json(todo))
    .catch((error) => console.log(error));
});

app.patch(UPDATE_ITEM, (req, res) => {
  const { id } = req.params,
    { name, done } = req.body;
  repository
    .updateById(id, { name, done })
    .then((todo) => res.json(todo))
    .catch((error) => console.log(error));
});

module.exports = app;
