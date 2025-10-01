import { Elysia } from "elysia";

const port = process.env.PORT || 3333;

const app = new Elysia()
  .get("/", () => "Hello Elysia")
  .listen(port, ({ hostname, port }) =>
    console.log(`🦊 Elysia is running at ${hostname}:${port}`)
  );

