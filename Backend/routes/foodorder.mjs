import { daFoodOrder } from "../db/da.mjs";

export default class FoodOrder {
    constructor() {}

    /**
     * @swagger
     * /api/foodorder:
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
        console.log("Food order is getting...");
        try {
            const foodOrders = await daFoodOrder.select();
            res.json(foodOrders);
        } catch (error) {
            res.status(500).json({ error: "Error fetching food orders" });
        }
    }
}

const foodOrder = new FoodOrder();
export { foodOrder };