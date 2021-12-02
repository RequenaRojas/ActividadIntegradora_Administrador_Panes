import { closeConnection, initConnection } from "../package/controller/connection.js";
import { insertDirrecion, insertUsuario } from "../package/controller/Controler.js";
import { createDirrec_model, createUser_model, getColAldia, User } from "../package/model/Modelo.js";

export const MtrRegistroUsuario = async (req, res) => {

    const nombre_usuario = req.query.nom_usu;
    const appat_usuario = req.query.apelPat_usu;
    const apmat_usuario = req.query.apelMat_usu;
    const fecNaci_usuario = req.query.fechNaci_usu;
    const tel_usuario = req.query.telaPart;
    const cel_usuario = req.query.teleCelu;
    const user_usuario = req.query.user_usuario;
    const pass_usuario = req.query.pass_usuario;
    const priv_usuario = 0;
    
    const id_colonia = req.query.id_colonia;
    const calle_dirrec = req.query.calle_dirrec;
    const num_int_dirrec = req.query.num_int_dirrec;
    const num_ext_dirrec = req.query.num_ext_dirrec;

    // console.log(id_colonia, calle_dirrec, num_int_dirrec, num_ext_dirrec, 'VALORES DIRREC');

    try{

        const pool = await initConnection();

        var dirrec = await createDirrec_model(calle_dirrec, 
            num_int_dirrec,num_ext_dirrec,
            id_colonia, pool)
        
        console.log(dirrec, 'EN MTRREGISTROUSUARIO');

        const colAldia = await getColAldia(dirrec.id_colonia, pool);
        console.log(colAldia);

        const colAldiaObj = {colAldia: colAldia};

        const dirrecObj = {
            ...dirrec,
            ...colAldiaObj
        }
        console.log(dirrecObj);


        const user = await createUser_model(nombre_usuario, appat_usuario,
            apmat_usuario, fecNaci_usuario,
            tel_usuario, cel_usuario,
            user_usuario, pass_usuario,
            priv_usuario, dirrec.id_dirrec, pool);
    
        
        
        // console.log(user);
        await closeConnection(pool);

        return [user, dirrecObj]
        
    }catch(err){console.log(err);}
} 