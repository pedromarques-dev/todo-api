import { Elysia } from "elysia";

import { z } from "zod";

const port = process.env.PORT || 3333;

const app = new Elysia();

app.get("/", () => "Hello Elysia");
app.get("/health", () => "OK");

app.get(
  "/users",
  () => {
    return [
      {
        id: "1",
        name: "Neuber",
      },
    ];
  },
  {
    detail: {
      summary: "Buscar todos os usuarios",
      tags: ["users"],
    },
    response: {
      200: z.array(
        z.object({
          id: z.string(),
          name: z.string(),
        })
      ),
    },
  }
);

app.get(
  "/users/:id",
  ({ params }) => {
    const userId = params.id;

    return {
      id: userId,
      name: "Neuber",
    };
  },
  {
    detail: {
      summary: "Buscar um usuario pelo id",
      tags: ["users"],
    },
    params: z.object({
      id: z.string(),
    }),
    response: {
      200: z.object({
        id: z.string(),
        name: z.string(),
      }),
    },
  }
);

export default {
  fetch: app.fetch,
};
