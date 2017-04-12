const db = require('./models');
const repl = require('repl');

let insertBook = (book) => {
  db.Book.create({ title: book })
  .then(book => {
    console.log(JSON.stringify(book.toJSON(), null, 2));
  })
  .catch(err => err.message);

  return 'inserts book';
};

let insertAuthor = (author) => {
  db.Author.create({ name: author })
  .then(author => {
    console.log(JSON.stringify(author.toJSON(), null, 2));
  })
  .catch(err => err.message);

  return 'inserts author';
};

let insertAuthorBook = (author_id, book_id) => {
  db.AuthorBook.create({
    'author_id': author_id,
    'book_id': book_id
  })
  .then(authorbook => {
    console.log(JSON.stringify(authorbook.toJSON(), null, 2));
  })
  .catch(err => err.message);

  return `inserts author's and book's id`;
}

let getAuthorBook = () => {
  db.Author.findAll()
  .then(arr => {
    arr.forEach(author => {
      author.getBooks()
      .then(books => {
        console.log(author.name);
        books.forEach(book => {
          console.log(' - ', book.title);
        });
      });
    });
  })
  .catch(err => {
    console.log(err.message);
  })

  return 'gets authors and their books';
}

let getBookAuthor = () => {
  db.Book.findAll()
  .then(books => {
    books.forEach(book => {
      book.getAuthors()
      .then(authors => {
        console.log(book.title);
        authors.forEach(author => {
          console.log(' - ' + author.name);
        })
      })
    })
  })
}

let replServer = repl.start({ prompt: '> '});

replServer.context.insertBook = insertBook;
replServer.context.insertAuthor = insertAuthor;
replServer.context.insertAuthorBook = insertAuthorBook;
replServer.context.getAuthorBook = getAuthorBook;
replServer.context.getBookAuthor = getBookAuthor;
