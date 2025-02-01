import { daStaff } from "../db/da.mjs";

export default class Staff {
    constructor() {}

    /**
     * @swagger
     * /api/staff:
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
        console.log("staff is getting...");
        try {
            const staffs = await daStaff.select();
            res.json(staffs);
        } catch (error) {
            res.status(500).json({ error: "Error fetching staff" });
        }
    }
}

const staff = new Staff();
export { staff };