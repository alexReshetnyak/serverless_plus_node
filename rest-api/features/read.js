'use strict';
const db = require('../db');

module.exports.getTodo = async event => {
  try {
    const { id } = event.pathParameters;
    const todo = await db.todo.findOne({
      where: { id },
      attributes: ['id', 'task', 'completed']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        todo
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ errorMessage: error.message })
    };
  }
};

module.exports.listTodos = async event => {
  try {
    const listTodos = await db.todo.findAll({
      attributes: ['id', 'task', 'completed']
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        listTodos
      })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ errorMessage: error.message })
    };
  }
};
