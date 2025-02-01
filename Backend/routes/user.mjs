import { daUser } from "../db/da.mjs";

export default class User {
    constructor() {}

    /**
     * @swagger
     * /api/user:
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
        console.log("user is getting...");
        try {
            const users = await daUser.select();
            res.json(users);
        } catch (error) {
            res.status(500).json({ error: "Error fetching users" });
        }
    }
}

const user = new User();
export { user };
