import db from "../lib/db.js";

db.prepare("DROP TABLE IF EXISTS news").run();

db.prepare(`
  CREATE TABLE news (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL
  );
`).run();

console.log("news tablosu");


db.prepare(`
  CREATE TABLE IF NOT EXISTS finance (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    value REAL NOT NULL,
    change REAL NOT NULL
  );
`).run();
console.log("finance tablosu");

db.prepare(`
  CREATE TABLE IF NOT EXISTS weather (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    day TEXT NOT NULL,
    icon TEXT NOT NULL,
    temp TEXT NOT NULL
  );
`).run();

console.log("weather tablosu");


db.prepare("DROP TABLE IF EXISTS smallnews").run();

db.prepare(`
  CREATE TABLE smallnews (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    image TEXT NOT NULL,
    link TEXT NOT NULL
  );
`).run();

console.log("kucukhaber");
