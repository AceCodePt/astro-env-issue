import { defineConfig, envField } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: "server",

  env: {
    schema: {

      // Database Credentials (Server-side secrets)
      DATABASE_HOST: envField.string({ context: "server", access: "public" }),
    }
  }
})
