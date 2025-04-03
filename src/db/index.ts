// src/db/index.ts
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema"; // Import your entire schema

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set.");
}

// Disable prefetch as it is not supported for "Transaction" pool mode (recommended for Supabase)
const client = postgres(connectionString, { prepare: false });
export const db = drizzle(client, { schema });
