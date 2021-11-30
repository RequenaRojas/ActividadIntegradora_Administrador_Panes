import { getUsuario_model } from '../package/model/Modelo.js';
export const getSession = (req, res) => {
    
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