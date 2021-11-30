import {initConnection, getAllColonias} from '../controller/connection.js';
import sql from 'mssql';

const pool = await initConnection();

const Colonias = await getAllColonias(pool);

await pool.close();

console.log(Colonias);