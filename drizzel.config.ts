import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./drizzle",
  dialect: "postgresql",
  schema: "./config/schema.tsx",
  driver: "pglite",
  dbCredentials: {
    url: "postgresql://ai-story-builder_owner:NLrTGh6zEb0m@ep-old-thunder-a5o9zql1.us-east-2.aws.neon.tech/ai-story-builder?sslmode=require",
  },
});
