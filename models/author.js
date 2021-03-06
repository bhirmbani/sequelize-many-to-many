'use strict';
module.exports = function(sequelize, DataTypes) {
  var Author = sequelize.define('Author', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Author.belongsToMany(models.Book, {
          through: 'AuthorBooks',
          foreignKey: 'author_id'
        });
      }
    }
  });
  return Author;
};
