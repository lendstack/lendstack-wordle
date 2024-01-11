import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";
import { env } from "~/env";

export const DATABASE_URL = `postgres://${env.POSTGRES_PASSWORD}:${
  env.POSTGRES_PASSWORD
}@${env.NODE_ENV === "development" ? "localhost" : "db"}:5432/${
  env.POSTGRES_DB
}`;
const queryClient = postgres(DATABASE_URL);

export const db = drizzle(queryClient, { schema });

export type Database = typeof db;