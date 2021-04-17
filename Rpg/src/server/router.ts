// @ts-ignore
import { Router, send } from "https://deno.land/x/oak/mod.ts";

export const router = new Router();
router.get("/", async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/Rpg/src/layout/`,
        index: "index.html",
    });
});