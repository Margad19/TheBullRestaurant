import pg from 'pg'
import DaUser from './dauser.mjs';
import DaStaffs from './dastaffs.mjs';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TheBullHotPot',
    password: 'Margad19',
    port: 5432,
});

export default pool;
const daUser = new DaUser(pool);
const daStaffs = new DaStaffs(pool);
export { daUser, daStaffs}
