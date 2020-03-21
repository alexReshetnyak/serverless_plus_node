'use strict';
const db = require('../db');

module.exports.updateTodo = async event => {
  try {
    const { id } = event.pathParameters;
    const body = JSON.parse(event.body);

    const res = await db.todo.update(body, {
      where: {
        id
      },
      returning: true // return updated todo
    });

    const [rowsAffected, todoArr] = res;

    return {
      statusCode: 200,
      body: JSON.stringify({
        rowsAffected,
        todo: todoArr[0]
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      error: error.message
    };
  }
};
