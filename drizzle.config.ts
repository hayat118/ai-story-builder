import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

dotenv.config();

console.log(
  "Database Connection String:",
  process.env.NEXT_PUBLIC_DATABASE_URL || "Not set"
);

export default defineConfig({
  // out: "./drizzle",
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  // driver: "pglite",
  dbCredentials: {
    url: "postgresql://ai-story-builder_owner:NLrTGh6zEb0m@ep-old-thunder-a5o9zql1.us-east-2.aws.neon.tech/ai-story-builder?sslmode=require",
  },
  verbose: true,
  strict: true,
});
