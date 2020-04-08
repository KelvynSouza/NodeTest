var sqlite3 = require("sqlite3").verbose();

export function openDb() {    
  return  new sqlite3.Database("../../../db.db");
  
}
