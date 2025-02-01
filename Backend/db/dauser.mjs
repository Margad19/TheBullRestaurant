export default class DaUser {
    constructor(poolObj) {
        this.pool = poolObj;
        this.selectStr = "SELECT * FROM public.users";
    }

    async select() {
        const client = await this.pool.connect();
        try {
            const res = await client.query(this.selectStr);
            return res.rows;
        } catch (error) {
            console.error("Database Error:", error); // Logs detailed error
            throw new Error("Database query failed");
        } finally {
            client.release();
        }
    }
}
