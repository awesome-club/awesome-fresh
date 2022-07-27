import { DB } from "./deps.ts";
import { DatabaseName, InMemoryDb } from "./env.ts";

export const DbInstance = new DB(DatabaseName, { memory: InMemoryDb });

export function initDb() {
  DbInstance.query(`
    CREATE TABLE IF NOT EXISTS shows (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name CHARACTER(50),
      poster CHARACTER(50)
    )
  `);
}

export const Querries = {
  Insert: "INSERT INTO shows (id, name, poster) VALUES (?,?,?)",
  Select: "SELECT id, name, poster from shows",
};
