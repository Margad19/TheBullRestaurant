import { daAdditional } from "../db/da.mjs";

export default class Additional {
    constructor() {}

    /**
     * @swagger
     * /api/additional:
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
        console.log("Additional product is getting...");
        try {
            const additionals = await daAdditional.select();
            res.json(additionals);
        } catch (error) {
            res.status(500).json({ error: "Error fetching additional products" });
        }
    }
}

const additional = new Additional();
export { additional };