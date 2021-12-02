import sql from 'mssql';
import  { dbsettings} from './querys.js';

/** FUNCION PARA LA CONEXION */

/**
 * 
 * @returns pool 
 *  NO OLVIDAR CERRAR EL POOL
 */
export const initConnection = async () => {
    try{
        const pool = new sql.ConnectionPool(dbsettings);  

        await pool.connect();
        // console.log(pool, '\n SE HA INICIADO CORRECTAMENTE LA CONEXION EN BD');
        return pool;
    }catch(error){console.log(error)}
}

export const closeConnection = async (pool) => {
    try{
        pool.close();
    }catch(error){console.log(error)}
}


