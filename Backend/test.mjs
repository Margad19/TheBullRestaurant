import pg from 'pg';
import DaUser from './db/dabranch.mjs'; // Adjust the import path as needed
import DaAdditional from './db/daadditional.mjs';

// Create the pool object
const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'TheBullHotPot',
    password: 'Margad19',
    port: 5432,
});

// Create an instance of DaUser
const daUser = new DaUser(pool);

// Test the select method
(async () => {
    try {
        const users = await daUser.select();
        console.log('Users:', users);
    } catch (error) {
        console.error('Error fetching users:', error);
    } finally {
        // End the pool to close the connection
        await pool.end();
    }
})();