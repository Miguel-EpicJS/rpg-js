// @ts-ignore
import { Router, send } from "https://deno.land/x/oak/mod.ts";
// @ts-ignore
import {character} from "../game/main.ts"

export const router = new Router();
router.get("/", async (context) => {
    await send(context, context.request.url.pathname, {
        root: `${Deno.cwd()}/Rpg/src/layout/`,
        index: "index.html",
    });
});
router.get("/character", (context) => {
    context.response.body = character.print_status()
})