const todo = require("../models/Todo");

class TodoRepository {
  constructor(model) {
    this.model = model;
  }

  create(name) {
    const item = { name, done: false },
      store = new this.model(item);
    return store.save();
  }

  findAll() {
    return this.model.find();
  }

  findById(id) {
    return this.model.findById(id);
  }

  deleteById(id) {
    return this.model.findByIdAndDelete(id);
  }

  updateById(id, object) {
    const query = { id };
    return this.model.findOneAndUpdate(query, {
      $set: { name: object.name, done: object.done },
    });
  }
}

module.exports = new TodoRepository(todo);
