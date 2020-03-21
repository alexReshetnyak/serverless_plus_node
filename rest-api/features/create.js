'use strict';
const db = require('../db');

module.exports.createTodo = async event => {
  try {
    const body = JSON.parse(event.body);
    if (body.task) throw new Error('task property is required');
    const todo = await db.todo.create({
      task: body.task
    });

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          todo: todo
        },
        null,
        2
      )
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: error.message
    };
  }
};
