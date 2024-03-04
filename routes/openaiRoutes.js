import { Router } from "express";

import { getOpenAI, guessColor, getMusic } from "../controllers/openaiControllers.js";

const openAIRoute= Router();

openAIRoute.get("/", getOpenAI);

openAIRoute.post("/color", guessColor);

openAIRoute.post("/music", getMusic);


export default openAIRoute;
