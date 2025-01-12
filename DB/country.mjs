class Country {
    constructor(parameters) {

    }

    async list(request, response) {
        // validate
        await doCountry.listCountries();

        const result = await doCountry.listCountries();
        
    }
}



export ()