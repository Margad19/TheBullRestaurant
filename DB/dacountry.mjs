class daCountry {
    constructor (poolObj) {
        this.db = poolObj.db;
        this.listCountriesQuery = "SELECT * FROM testServer"
    }

    async listCountries(){
        await this.db.query();
    }
}