import express from 'express';
import session from 'express-session';

import { initConnection, closeConnection } from '../package/controller/connection.js';
import { getColonias_model } from '../package/model/Modelo.js';
import { RegistroUsuario } from './RegistroUsuario.js';
import { getSession } from './Sesiones.js';

const router = express.Router();
router.use(session({
    secret: 'm,z@cvjasdf*@34320923',
    resave: true,
    saveUninitialized: true,
  }));


  
router.get('/', (req, res) => {

    //PENDIENTE
    //Sobre la sesión
    const usu = getSession(req, res);


    res.render('index.html', {usu: usu});
});

router.get('/Tienda', (req, res) => {
     //Sobre la sesión
    const usu = getSession(req, res);

    res.render('Tienda.html', { usu: usu});
});

router.get('/Carrito', (req, res) => {
    res.render('Carrito.html');
});

router.get('/InSeAdministrador', (req, res) => {
    res.render('InSeAdministrador.html');
});

router.get('/RegistroUsuario', (req, res) => {

    var col = null
    try{
         col =  RegistroUsuario(req, res);
    }catch(err){
        console.log(err);
    }
    res.render('RegistroUsuario.html', {col: col});
});

router.get('/MtrRegistroUsuario', (req, res) => {

    
    res.render('MtrRegistroUsuario.html');
});



router.get('/InSeUsuario', (req, res) => {
    res.render('InSeUsuario.html');
});

router.get('/ConfigUsuario', (req, res) => {
    res.render('ConfigUsuario.html');
});

export default router;