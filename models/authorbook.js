'use strict';
module.exports = function(sequelize, DataTypes) {
  var AuthorBook = sequelize.define('AuthorBook', {
    author_id: DataTypes.INTEGER,
    book_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        AuthorBook.belongsTo(models.Author, {
          foreignKey: 'author_id'
        });
        AuthorBook.belongsTo(models.Book, {
          foreignKey: 'book_id'
        })
      }
    }
  });
  return AuthorBook;
};
