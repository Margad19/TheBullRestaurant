export default class Dasetfood {
    constructor(poolObj) {
        this.pool = poolObj;
        this.selectStr = "SELECT * FROM public.setfoods";
        this.insertSetFoodStr = "INSERT INTO public.setfoods (foodorderid, setname) VALUES($1, $2)";
        this.deleteSetFoodStr = "DELETE FROM public.setfoods WHERE id = $1";
    }

    async select() {
        const client = await this.pool.connect();
        try {
            const res = await client.query(this.selectStr);
            return res.rows;
        } finally {
            client.release();
        }
    }

    async insertSetFood(req, res, setFoodObj) {
        try {
            const result = await this.pool
                .query(
                    this.insertSetFoodStr,
                    [setFoodObj.foodorderid, setfoodObj.setname]
                );
            //const userId = result.rows[0].id;
            //console.log('Inserted user ID:', userId);
            if (result.rowCount != 1) {
                res.status(500).send(`Couldn't add new set food.`);
                return;
            }

            res.status(201).send('New set food created successfully.');
        }
        catch (error) {
            res.status(500).send(`Couldn't add new set food. Error is: \n"${error}"`)
        }
    }

    // ✅ DELETE method
    async deleteSetFood(req, res) {
        const { id } = req.params; // Get ID from URL params

        try {
            const result = await this.pool.query(this.deleteSetFoodStr, [id]);

            if (result.rowCount === 0) {
                res.status(404).send(`Set food with ID ${id} not found.`);
                return;
            }

            res.status(200).send(`Set food with ID ${id} deleted successfully.`);
        } catch (error) {
            res.status(500).send(`Couldn't delete set food. Error: \n"${error}"`);
        }
    }
}