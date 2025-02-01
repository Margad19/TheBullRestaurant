import pg from 'pg'
import DaUser from './dauser.mjs';
import DaStaff from './dastaff.mjs';
import Dasetfood from './dasetfood.mjs';
import DaRoom from './daroom.mjs';
import DaRoomOrder from './daroomorder.mjs';
import DaFoodOrder from './dafoodorder.mjs';
import DaDelivery from './dadelivery.mjs';
import DaBranch from './dabranch.mjs';
import DaAdditional from './daadditional.mjs';

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TheBullHotPot',
    password: 'Margad19',
    port: 5432,
});

export default pool;
const daUser = new DaUser(pool);
const daStaff = new DaStaff(pool);
const daSetfood = new Dasetfood(pool);
const daRoom = new DaRoom(pool);
const daRoomOrder = new DaRoomOrder(pool);
const daFoodOrder = new DaFoodOrder(pool);
const daDelivery = new DaDelivery(pool);
const daBranch = new DaBranch(pool);
const daAdditional = new DaAdditional(pool);
export { daUser, daStaff, daSetfood, daRoom, daRoomOrder, daFoodOrder, daDelivery, daBranch, daAdditional}
