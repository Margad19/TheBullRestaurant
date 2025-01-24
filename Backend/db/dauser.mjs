export default class DaUser {
    constructor(poolObj) {
        this.pool = poolObj;
        this.selectStr = "SELECT * FROM public.users";
    }

}