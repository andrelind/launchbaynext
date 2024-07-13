import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    dialect: "postgresql",
    schema: "./schema.ts",
    out: "./src/server/drizzle",
    dbCredentials: {
        url: process.env.DATABASE_URL || "postgresql://postgres:password@localhost:5432/postgres",
    }
})