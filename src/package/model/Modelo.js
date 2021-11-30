import { getAllAlcaldia, getAllColonia, getUsuario, getAlcaldia } from "../controller/Controler.js";

export const User = () => {

    var User;
    User.id_usuario = null;
    User.nombre_usuario = null;
    User.appat_usuario = null;
    User.apmat_usuario = null;
    User.fecNac_usuario = null;
    User.tel_usuario = null;
    User.cel_usuario = null;
    User.user_usuario = null;
    User.pass_usuario = null;
    User.priv_usuario = null;
    User.id_dirrec = null;
    return User;

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

export const getDirrec = (id_dirrec, pool) => {



}

export const getColonias_model = async (pool) => {
    try{
        const resulset = await getAllColonia(pool);
        var valuesCombobox;
        for(const fila in resulset){

        const alcaldia = getAlcaldia(fila.id_alcaldia, pool);  
            valuesCombobox.push( colonia + '--' + alcaldia);
        }

    return valuesCombobox;
    }catch(err){
        console.log(err);
        return null;
    }
}