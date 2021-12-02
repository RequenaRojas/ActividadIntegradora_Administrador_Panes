import { getAllAlcaldia, getAllColonia, getUsuario, getAlcaldia, insertUsuario, getAlcaldiaByIDColonia, getColonia, insertDirrecion } from "../controller/Controler.js";

export var User = async (id_usuario, nombre_usuario, appat_usuario,
    apmat_usuario, fecNaci_usuario,
    tel_usuario, cel_usuario,
    user_usuario, pass_usuario,
    priv_usuario, id_dirrec) => {

    var User = {
        id_usuario:  id_usuario,
        nombre_usuario:  nombre_usuario,
        appat_usuario:  appat_usuario,
        apmat_usuario:  apmat_usuario,
        fecNaci_usuario:  fecNaci_usuario,
        tel_usuario:  tel_usuario,
        cel_usuario:  cel_usuario,
        user_usuario:  user_usuario,
        pass_usuario:  pass_usuario,
        priv_usuario:  priv_usuario,
        id_dirrec:  id_dirrec

    }
    return User;


}

export var Dirrec = async (id_dirrec, calle_dirrec, 
    num_int_dirrec,num_ext_dirrec,
    id_colonia ) => {

        var Dirrec = {
            id_dirrec:  id_dirrec,
            calle_dirrec:  calle_dirrec,
            num_int_dirrec:  num_int_dirrec,
            num_ext_dirrec:  num_ext_dirrec,
            id_colonia:  id_colonia
        };
        return Dirrec;
    }


/**
 * 
 * @param {String} id_usuario 
 * @return {null} SI no esta en la BD
 * @return {user} Si esta en la BD
 */
export const getUsuario_model = (id_usuario, pool) => {

    const recordset = getUsuario(id_usuario, pool)


}

export const  getColAldia = async (id_colonia, pool) => {
    try{
        var colAldia;
        const colonia = await getColonia(id_colonia, pool);
        // console.log(colonia.nombre_colonia, 'EN GETCOLALDIA');
        const alcaldia = await  getAlcaldiaByIDColonia(id_colonia, pool);  
        colAldia =  colonia.nombre_colonia + '--' + alcaldia;
        return colAldia;
    }catch(err){
        console.log(err);
        return null;
    }
}


export const getAllColAldias = async (pool) => {
    try{
        
        const resulset = await getAllColonia(pool);
        // console.log(resulset);
        var valuesCombobox = [];
        for(var i = 0; i < resulset.length; i++){

            const colAldia = await getColAldia(resulset[i].id_colonia,pool);
            // console.log(resulset[i].id_alcaldia);
            // const alcaldia = await  getAlcaldia(resulset[i].id_alcaldia, pool);  
            // valuesCombobox.push( resulset[i].nombre_colonia + '--' + alcaldia);
            valuesCombobox.push(colAldia)
        }

        // console.log(valuesCombobox);

    return valuesCombobox;
    }catch(err){
        console.log(err);
        return null;
    }
}

export const createDirrec_model = async (calle_dirrec, 
    num_int_dirrec,num_ext_dirrec,
    id_colonia, pool) => {

    try{

        const id_dirrec = await insertDirrecion(calle_dirrec,
            num_ext_dirrec,num_int_dirrec, 
            id_colonia, pool);
    
        console.log(id_dirrec, 'PARA EL INSERTDIRRECION');

        var dirrec = await Dirrec(id_dirrec, calle_dirrec,
            num_ext_dirrec,num_int_dirrec, 
            id_colonia );


        return dirrec;

    }catch(err){
        console.log(err);
        return null
    }
}

export const createUser_model = async (nombre_usuario, appat_usuario,
    apmat_usuario, fecNaci_usuario,
    tel_usuario, cel_usuario,
    user_usuario, pass_usuario,
    priv_usuario, id_dirrec, pool) => {

    try{

        const id_usuario = await insertUsuario(nombre_usuario, appat_usuario,
            apmat_usuario, fecNaci_usuario,
            tel_usuario, cel_usuario,
            user_usuario, pass_usuario,
            priv_usuario, id_dirrec, pool);

        var user = await User(id_usuario, nombre_usuario, appat_usuario,
            apmat_usuario, fecNaci_usuario,
            tel_usuario, cel_usuario,
            user_usuario, pass_usuario,
            priv_usuario, id_dirrec);
        return user;

    }catch(err){
        console.log(err);
        return null;
    }
}