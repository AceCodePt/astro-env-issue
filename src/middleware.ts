import { DATABASE_HOST } from "astro:env/server";
import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware(async (context, next) => {
  const host = DATABASE_HOST
  console.log(host)

  return next();
});


