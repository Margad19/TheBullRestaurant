import {daUser} from "../db/dauser.mjs";

export default class User {
    constructor(username, password, email, phone) {
        this.username = username;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }

    async register() {
        try {
            const result = await daUser.insert(this);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async get(req, res) {
        console.log("city getting...");
        
        await daUser.select(req, res);
    }

}