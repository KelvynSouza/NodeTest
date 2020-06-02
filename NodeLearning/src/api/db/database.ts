var sqlite3 = require("sqlite3").verbose();

export function openDb() {
  let db = new sqlite3.Database("src/api/db/db.db",sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      console.log("Error when creating the database", err);
    } else {
      console.log("Database created!");
    }
  });
  return db;
}
