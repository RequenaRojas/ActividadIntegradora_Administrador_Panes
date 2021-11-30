import {queries} from "./querys.js";
import sql from 'mssql';

/**
 * 
 *      SOBRE LOS CATALOGOS
 */


export const getAllColonia = async (pool) => {
    const request = new sql.Request(pool);
    const results = await request.query(queries.getAllColonia);
    return results.recordset;
}

export const getAllAlcaldia = async (pool) => {
    const request = new sql.Request(pool);
    const results = await request.query(queries.getAllAlcaldia);
    return results.recordset;
}

export const getAllColonia_idAlcaldia = async (id_alcaldia, pool) => {
    const request = new sql.Request(pool);
    const results = await request.input('id_alcaldia',sql.Int, id_alcaldia)
                                 .query(queries.getAllColonia_idAlcaldia);
    return results.recordset;
}

export const getAlcaldia = async (nombre_alcaldia, pool) => {
    const request = new sql.Request(pool);
    const results = await request.input('nombre_alcaldia', sql.NChar(50), nombre_alcaldia)
                                 .query(queries.getAlcaldia);
    return results.recordset;
}

/**
 * 
 *  SOBRE LOS DETALLES
 * 
 */

//Dirreción

export const insertDirrecion = async (calle_dirrec, num_ext_dirrec,
                                      num_int_dirrec, id_colonia, pool) => {
    const request = new sql.Request(pool);
    const results = await request.input('calle_dirrec', sql.NChar(50), calle_dirrec)
                                 .input('num_ext_dirrec', sql.Int, num_ext_dirrec)
                                 .input('num_int_dirrec', sql.Int, num_int_dirrec) 
                                 .input('id_colonia', sql.Int, id_colonia)
                                 .output('id_dirrec', sql.Int)
                                 .query(queries.insertDirrecion);
    return results.output;
}

export const updateDirrecion =  async (id_dirrec, calle_dirrec, num_ext_dirrec,
                                        num_int_dirrec, id_colonia, pool) => {
    const request = new sql.Request(pool);
    const results = await request.input('id_dirrec', sql.Int, id_dirrec) 
                                 .input('calle_dirrec', sql.NChar(50), calle_dirrec)
                                 .input('num_ext_dirrec', sql.Int, num_ext_dirrec)
                                 .input('num_int_dirrec', sql.Int, num_int_dirrec) 
                                 .input('id_colonia', sql.Int, id_colonia)
                                 .query(queries.updateDirrecion);
    return results.rowsAffected;
}

export const getDirrecion = async (id_dirrec, pool) => {
    try{
        const request = new sql.Request(pool);
        const results = await request.input('id_dirrec', sql.Int, id_dirrec)
                                    .query(queries.getDirrecion);
        return results.recordset;
    }catch(err){
        console.log(err)
        return null;
    }
    
}

//Compra

export const insertDCompra = async (id_compra, id_producto,
                                    cantidad_dcompra, subtotal_dcompra, pool) => {
    const request = new sql.Request(pool);
    const results = await request.input('id_compra', sql.Int, id_compra)
                                 .input('id_producto', sql.Int, id_producto) 
                                 .input('cantidad_dcompra', sql.Int, cantidad_dcompra)
                                 .input('subtotal_dcompra', sql.Float, subtotal_dcompra)
                                 .output('id_dcompra', sql.Int)
                                 .query(queries.insertDirrecion);
    return results.output;
}

export const getDCompra = async (id_compra, pool) => {

    try{
        const request = new sql.Request(pool);
        const results = await request.input('id_compra', sql.Int, id_compra)
                                    .query(queries.getDCompra);
        return results.recordset;
    }catch(err){
        console.log(err);
        return null;
    }
    
}

/**
 * 
 *  IDENTIDADES
 * 
 */

//  USUARIO 

export const insertUsuario = async (nombre_usuario, appat_usuario,
                                    apmat_usuario, fecNaci_usuario,
                                    tel_usuario, cel_usuario,
                                    user_usuario, pass_usuario,
                                    priv_usuario, id_dirrec, pool) => {
    const request = new sql.Request(pool);
    request.input('nombre_usuario', sql.NChar(50), nombre_usuario)
            .input('appat_usuario', sql.NChar(50), appat_usuario) 
            .input('apmat_usuario', sql.NChar(50), apmat_usuario)
            .input('fecNaci_usuario', sql.Date, fecNaci_usuario)
            .input('tel_usuario', sql.Int, tel_usuario) 
            .input('cel_usuario', sql.Int, cel_usuario)
            .input('user_usuario', sql.NChar(50), user_usuario)
            .input('pass_usuario', sql.NChar(50), pass_usuario) 
            .input('priv_usuario', sql.Int, priv_usuario)
            .input('id_dirrec', sql.Int, id_dirrec)
            .output('id_usuario', sql.Int);

    const results = await request.query(queries.insertUsuario);
    return results.output;
}

export const getUsuario = (user_usuario, pass_usuario, pool) => {
    try{
        const request = new sql.Request(pool);
        request.input('user_usuario', sql.NChar(50), user_usuario)
                .input('pass_usuario', sql.NChar(50), pass_usuario);
        
        const results =   request.query(queries.getUsuario);
        return results.recordset;
    }catch(err){
        console.log(err);
        return null;
    }
    
}

export const getIDDirrec = (id_usuario, pool) => {
    try{
        const request = new sql.Request(pool);
        results =  request.input('id_usuario', sql.Int, id_usuario)
                                    .query(queries.getIDDirrec);
        return results.recordset[0];
    }catch(err){
        console.log(err);
        return null;
    }
    
}

export const updateUsuario = (id_usuario,nombre_usuario, appat_usuario,
                              apmat_usuario, fecNaci_usuario,
                              tel_usuario, cel_usuario,
                              user_usuario, pass_usuario,
                              priv_usuario,  pool) => {

    const request = new sql.Request(pool);
    const results =  request.input('nombre_usuario', sql.NChar(50), nombre_usuario)
                                    .input('appat_usuario', sql.NChar(50), appat_usuario) 
                                    .input('apmat_usuario', sql.NChar(50), apmat_usuario)
                                    .input('fecNaci_usuario', sql.Date, fecNaci_usuario)
                                    .input('tel_usuario', sql.Int, tel_usuario) 
                                    .input('cel_usuario', sql.Int, cel_usuario)
                                    .input('user_usuario', sql.NChar(50), user_usuario)
                                    .input('pass_usuario', sql.NChar(50), pass_usuario) 
                                    .input('priv_usuario', sql.Int, priv_usuario)
                                    .input('id_dirrec', sql.Int, id_dirrec)
                                    .input('id_usuario', sql.Int, id_usuario)
                                    .query(queries.updateUsuario);
    return results.rowsAffected;
}

// COMPRA

export const insertMCompra = async (fechaPagado_compra, total_compra,
                                    completado, id_usuario, pool) => {
    const request = new sql.Request(pool);
    const results =  request.input('fechaPagado_compra', sql.Date, fechaPagado_compra)
                                .input('total_compra', sql.NChar(50), total_compra) 
                                .input('completado', sql.NChar(50), completado)
                                .input('id_usuario', sql.Int, id_usuario) 
                                .output('id_compra', sql.Int)
                                .query(queries.insertMCompra);
    return results.output;
}

