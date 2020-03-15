'use strict';
const db = require('../db');

module.exports.getTodo = async event => {
  const todo = "Make dinner";

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        todo,
      },
      null,
      2
    ),
  };

};

module.exports.listTodos = async event => {
  const listTodos = await db.todo.findAll({
    attributes: ['id', 'task', 'completed']
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        listTodos,
      },
    ),
  };

};