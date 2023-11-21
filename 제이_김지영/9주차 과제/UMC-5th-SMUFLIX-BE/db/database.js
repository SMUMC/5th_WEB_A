import sqlite3 from "sqlite3";

let db = new sqlite3.Database("./db/chinook.db");

db.run(
  `
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    age INTEGER,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)`,
  function (err) {
    if (err) {
      console.log(err.message);
    }
  }
);

export const insertUser = async ({ name, email, age, username, password }) => {
  const result = db.run(
    `INSERT INTO users(name, email, age, username, password) VALUES('${name}', '${email}', ${age}, '${username}', '${password}')`,
    function (err) {
      if (err) {
        return console.log(err.message);
      }
      // get the last insert id
      console.log(`A row has been inserted with rowid ${this.lastID}`);
    }
  );

  return username;
};

export const findUserByUserName = async (username) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM users WHERE username = '${username}'`;

    return db.get(sql, function (err, row) {
      if (err) {
        console.error("DB Error: ", err.message);
        return reject(err.message);
      }
      return resolve(row);
    });
  });
};

export const findUserByName = async (name) => {
  return new Promise((resolve, reject) => {
    let sql = `SELECT * FROM users WHERE name = '${name}'`;

    return db.get(sql, function (err, row) {
      if (err) {
        console.error("DB Error: ", err.message);
        return reject(err.message);
      }
      return resolve(row);
    });
  });
};
