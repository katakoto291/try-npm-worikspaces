import { Hono } from "hono";
import { greet } from "@try/shared";

export const app = new Hono();

app.get("/", (c) => c.json({ message: greet("backend") }));

app.get("/health", (c) => c.json({ status: "ok" }));

app.get("/greet/:name", (c) => {
  const name = c.req.param("name");
  return c.json({ message: greet(name) });
});
