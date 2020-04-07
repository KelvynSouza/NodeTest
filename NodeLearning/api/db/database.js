import sqlite3 from "sqlite3";
import { open } from "sqlite";

export async function openDb() {
    sqlite3.verbose();
  return open({
    filename: "/tmp/database.db",
    driver: sqlite3.Database
  });
  
}
