import {daUser} from "../db/dauser.mjs";

export default class User {
    constructor(parameters) {
    }

    async register() {
        try {
            const result = await daUser.insert(this);
            return result;
        } catch (error) {
            throw error;
        }
    }
    /** GET Methods */
    /**
     * @openapi
     * '/api/cities':
     *  get:
     *     tags:
     *     - City Controller
     *     summary: Get a list of cities
     *     responses:
     *      200:
     *        description: Fetched Successfully
     *      400:
     *        description: Bad Request
     *      404:
     *        description: Not Found
     *      500:
     *        description: Server Error
     */
    async get(req, res) {
        console.log("user is getting...");
        
        await daUser.select(req, res);
    }

}