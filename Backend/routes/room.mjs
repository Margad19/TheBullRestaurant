import { daRoom } from "../db/da.mjs";

export default class Room {
    constructor() {}

    /**
     * @swagger
     * /api/room:
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
        console.log("Room is getting...");
        try {
            const rooms = await daRoom.select();
            res.json(rooms);
        } catch (error) {
            res.status(500).json({ error: "Error fetching rooms" });
        }
    }
}

const room = new Room();
export { room };