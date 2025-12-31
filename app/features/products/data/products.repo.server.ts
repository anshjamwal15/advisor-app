
import { db } from "~/./.server/db/mockDb.server";

export async function listProducts() {
  return { rows: db.products, total: db.products.length };
}
