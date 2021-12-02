import { closeConnection, initConnection } from "../package/controller/connection.js";
import { getDirrecion, getUsuario, insertDirrecion, insertUsuario } from "../package/controller/Controler.js";
import { createDirrec_model, createUser_model, getColAldia, getUsuario_model, User } from "../package/model/Modelo.js";

export const MtrInSeUsuario = async (req, res) => {

    const user_usuario = req.query.user_usuario;
    const pass_usuario = req.query.pass_usuario;
    try{

        const pool = await initConnection();

        const user = await getUsuario(user_usuario, pass_usuario, pool);
        // console.log(user, 'Aquiiiiiiiii');

        var dirrec = await  getDirrecion(user.id_dirrec, pool);
        // console.log(dirrec);
        

        const colAldia = await getColAldia(dirrec.id_colonia,pool);
        // console.log(colAldia);

        const colAldiaObj = {colAldia: colAldia};

        const dirrecObj = {
            ...dirrec,
            ...colAldiaObj
        }
        console.log(dirrecObj);


       
        await closeConnection(pool);

        return [user, dirrecObj]
        
    }catch(err){console.log(err);
        return null
    }
} 