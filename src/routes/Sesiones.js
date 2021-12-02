import { getUsuario_model } from '../package/model/Modelo.js';
export const getSession = async (req, res) => {
    
    if(req.session.usu){
        return req.session.usu;
    }
    if(req.session.id_usuario){
        const usu = getUsuario_model(req.session.id_usuario);
        req.session.usu = usu;
        return usu
    }else{
        return null
    }
}

export const setSession = async (req, res, user, dirrec) => {
    try{
        req.session.usu = user;
        req.session.dirrec = dirrec;
    }catch(err){
        console.log(err);
    }

}