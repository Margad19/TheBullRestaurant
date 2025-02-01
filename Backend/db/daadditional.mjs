export default class DaAdditional {
    constructor(poolObj) {
        this.pool = poolObj;
        this.selectStr = "SELECT * FROM public.additional_products";
        this.insertAdditionalStr = "INSERT INTO public.additional_products (setfoodid, type, name) VALUES($1, $2, $3)";
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

    async insertAdditional(req, res, additionalObj) {
        try {
            const result = await this.pool
                .query(
                    this.insertAdditionalStr,
                    [additionalObj.setfoodid, additionalObj.type, additionalObj.name]
                );
            //const userId = result.rows[0].id;
            //console.log('Inserted user ID:', userId);
            if (result.rowCount != 1) {
                res.status(500).send(`Couldn't add new additional product.`);
                return;
            }

            res.status(201).send('New additional product created successfully.');
        }
        catch (error) {
            res.status(500).send(`Couldn't add new additional product. Error is: \n"${error}"`)
        }
    }
}