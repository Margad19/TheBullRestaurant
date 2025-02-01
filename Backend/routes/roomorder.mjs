import { daRoomOrder } from "../db/da.mjs";

export default class RoomOrder {
    constructor() {}

    /**
     * @swagger
     * /api/roomorder:
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
        console.log("Room order is getting...");
        try {
            const roomOrders = await daRoomOrder.select();
            res.json(roomOrders);
        } catch (error) {
            res.status(500).json({ error: "Error fetching room orders" });
        }
    }
}

const roomOrder = new RoomOrder();
export { roomOrder };