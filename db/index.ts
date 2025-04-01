import { drizzle } from "drizzle-orm/postgres-js";
import { config } from "dotenv";
import postgres from "postgres";

config({ path: ".env" }); // or .env.local
const client = postgres(process.env.DATABASE_URL!);
export const db = drizzle({ client });
