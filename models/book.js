'use strict';
module.exports = function(sequelize, DataTypes) {
  var Book = sequelize.define('Book', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Book.belongsToMany(models.Author, {
          through: 'AuthorBooks',
          foreignKey: 'book_id'
        });
      }
    }
  });
  return Book;
};
