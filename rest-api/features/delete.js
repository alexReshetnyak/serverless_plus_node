'use strict';
const db = require('../db');

module.exports.deleteTodo = async event => {
  try {
    const { id } = event.pathParameters;
    const res = await db.todo.destroy({
      where: { id }
      // completed: false will delete all items with status completed = false
    });

    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          numberOfChangedRaws: res,
          status: 'Success'
        },
        null,
        2
      )
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ errorMessage: error.message })
    };
  }
};
