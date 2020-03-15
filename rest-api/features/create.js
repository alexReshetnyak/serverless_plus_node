'use strict';
const db = require("../db");
module.exports.createTodo = async event => {
  const body = JSON.parse(event.body);

  const todo = await db.todo.create({
    task: body.task
  });

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        todo: todo,
      },
      null,
      2
    ),
  };

};
