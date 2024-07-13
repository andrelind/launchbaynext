import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import * as schema from './drizzle/schema';
// for migrations
// const migrationClient = postgres("postgres://postgres:adminadmin@0.0.0.0:5432/db", { max: 1 });
// migrate(drizzle(migrationClient), "./drizzle/migrations");

// for query purposes
const queryClient = postgres(process.env.DATABASE_URL || "postgres://postgres:adminadmin@0.0.0.0:5432/db");
export const db = drizzle(queryClient, { schema });