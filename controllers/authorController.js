// controllers/authorController.js

const asyncHandler = require('express-async-handler');
const db = require('../db');
const CustomNotFoundError = require('../errors/CustomeNotFoundError');

const getAuthorById = asyncHandler(async (req, res) => {
  const { authorId } = req.params;

  const author = await db.getAuthorById(Number(authorId));
  console.log(author);
  if (!author) {
    throw new CustomNotFoundError('Author not found.');
  }
  res.send(`Author Name: ${author.name}`);
});

module.exports = { getAuthorById };
