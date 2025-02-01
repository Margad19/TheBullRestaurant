import express from "express";
import { user } from "./routes/user.mjs";
import swaggerDocs from "./swagger.mjs";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api/user", (req, res) => user.get(req, res));

app.listen(port, () => {
    swaggerDocs(app, port);
    console.log(`Listening on http://localhost:${port}`);
    console.log(`Documentation is on http://localhost:${port}/docs`);
});

