# sequelize-many-to-many
Contoh implementasi many-to-many relationship pada ORM Sequelize.JS

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
