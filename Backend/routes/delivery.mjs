import { daDelivery } from "../db/da.mjs";

export default class Delivery {
    constructor() {}

    /**
     * @swagger
     * /api/delivery:
     *   get:
     *     summary: Get all users
     *     description: Fetches all users from the database
     *     responses:
     *       200:
     *         description: List of users
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: integer
     *                     example: 1
     *                   name:
     *                     type: string
     *                     example: John Doe
     */
    async get(req, res) {
        console.log("Delivery is getting...");
        try {
            const deliveries = await daDelivery.select();
            res.json(deliveries);
        } catch (error) {
            res.status(500).json({ error: "Error fetching deliveries" });
        }
    }
}

const delivery = new Delivery();
export { delivery };