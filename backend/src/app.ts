import { Hono } from "hono";
import { cors } from "hono/cors";
import { greet, type GreetResponse } from "@try/shared";

export const app = new Hono();

app.use("*", cors());

app.get("/", (c) => c.json<GreetResponse>({ message: greet("backend") }));

app.get("/health", (c) => c.json({ status: "ok" }));

app.get("/greet/:name", (c) => {
  const name = c.req.param("name");
  return c.json<GreetResponse>({ message: greet(name) + ' san' });
});
