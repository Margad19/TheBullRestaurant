import express from "express";
import { user } from "./routes/user.mjs";
import { staff } from "./routes/staff.mjs";
import { setfood } from "./routes/setfood.mjs";
import { roomOrder } from "./routes/roomorder.mjs";
import { room } from "./routes/room.mjs";
import { foodOrder } from "./routes/foodorder.mjs";
import { delivery } from "./routes/delivery.mjs";
import { branch } from "./routes/branch.mjs";
import { additional } from "./routes/additional.mjs";
import swaggerDocs from "./swagger.mjs";

const app = express();
app.use(express.json());

const port = 3000;

app.get("/", (req, res) => res.send("Hello World!"));
app.get("/api/user", (req, res) => user.get(req, res));
app.get("/api/staff", (req, res) => staff.get(req, res));
app.get("/api/setfood", (req, res) => setfood.get(req, res));
app.get("/api/roomorder", (req, res) => roomOrder.get(req, res));
app.get("/api/room", (req, res) => room.get(req, res));
app.get("/api/foodorder", (req, res) => foodOrder.get(req, res));
app.get("/api/delivery", (req, res) => delivery.get(req, res));
app.get("/api/branch", (req, res) => branch.get(req, res));
app.get("/api/additional", (req, res) => additional.get(req, res));

app.listen(port, () => {
    swaggerDocs(app, port);
    console.log(`Listening on http://localhost:${port}`);
    console.log(`Documentation is on http://localhost:${port}/docs`);
});

