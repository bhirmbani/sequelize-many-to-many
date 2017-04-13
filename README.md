# sequelize-many-to-many
Contoh implementasi many-to-many relationship pada ORM Sequelize.JS. Penjelasan mengenai many-to-many relationship dan implementasi pada sequelize.js ada pada blog post saya.

- [Many-to-many Relationship pada Sequelize.JS](http://www.akbarsahata.id/blog/2017/04/12/many-to-many-relationship-pada-sequelize-js/)

## cara menjalankan
Untuk menjalankan program, lakukan

```shell
$ node index.js
```

Program node.js akan berjalan dan REPL interface siap menerima command.


### contoh penggunan REPL

pada REPL interface, panggil fungsi-fungsi yang sudah disambungkan dengan REPL context.

```shell
> insertAuthor('Pramoedya Ananta Toer')
# author_id: 1
> insertBook('Bumi Manusia')
# book_id: 1
> insertBook('Anak Sejuta Bangsa')
# book_id: 2
> insertAuthorBook(1,1)
> insertAuthorBook(1,2)
> getAuthorBook()
# Pramoedya Ananta Toer
# - Bumi Manusia
# - Anak Sejuta Umat
```
