import { daSetfood } from "../db/da.mjs";

export default class SetFood {
    constructor() {}

    /**
     * @swagger
     * /api/setfood:
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
        console.log("Set Food is getting...");
        try {
            const setfoods = await daSetfood.select();
            res.json(setfoods);
        } catch (error) {
            res.status(500).json({ error: "Error fetching set foods" });
        }
    }
}

const setfood = new SetFood();
export { setfood };