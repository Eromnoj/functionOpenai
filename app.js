import express from "express";

import openAIRoute from "./routes/openaiRoutes.js";

const app = express();

app.use(express.json())

app.use("/api", openAIRoute);



app.listen(3000, () => {
  console.log("Server is running on port 3000");
} );