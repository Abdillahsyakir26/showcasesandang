import Database from "better-sqlite3";
import path from "node:path";

function query(sql) {
  const db = new Database(path.join(process.cwd(), "data", "showcase.db"), { readonly: true });
  const rows = db.prepare(sql).all();
  db.close();
  return rows;
}

export const getProducts = () => query("SELECT * FROM products ORDER BY id");
export const getReviews = () => query("SELECT * FROM reviews ORDER BY id DESC");
