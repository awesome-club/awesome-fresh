import { Handlers } from "$fresh/server.ts";
import { body } from "../../utils/req.ts";
import { DbInstance, Querries } from "../../db.ts";

export const handler: Handlers = {
  async POST(req) {
    const { id, name, poster_path } = await body(req);
    if (id) {
      DbInstance.query(Querries.Insert, [id, name, poster_path]);
    }
    return new Response();
  },
};
