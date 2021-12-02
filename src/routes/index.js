import express from 'express';
import session from 'express-session';
import { MtrInSeUsuario } from './MtrInSeUsuario.js';


import { MtrRegistroUsuario } from './MtrRegistroUsuario.js';
import { RegistroUsuario } from './RegistroUsuario.js';
import { getSession , setSession} from './Sesiones.js';

const router = express.Router();
router.use(session({
    secret: 'm,z@cvjasdf*@34320923',
    resave: true,
    saveUninitialized: true,
  }));


  
router.get('/', async (req, res) => {

    const usu = await getSession(req, res);

    console.log(usu);

    res.render('index.html', {usu: usu});
});

router.get('/Tienda', async (req, res) => {
     //Sobre la sesión
    const usu = await getSession(req, res);

    res.render('Tienda.html', { usu: usu});
});

router.get('/Carrito', (req, res) => {
    res.render('Carrito.html');
});

router.get('/RegistroUsuario', async  (req, res) => {
    const col = await RegistroUsuario(req, res);
    res.render('RegistroUsuario.html', {col: col});
});

router.get('/MtrRegistroUsuario', async (req, res) => {

    const userDirrec = await  MtrRegistroUsuario(req, res);
    await setSession(req, res, userDirrec[0], userDirrec[1]);


    res.render('MtrRegistroUsuario.html', {user: userDirrec[0], dirrec: userDirrec[1]});
});

router.get('/MtrInSeUsuario', async (req, res) => {

    const userDirrec = await  MtrInSeUsuario(req, res);
    await setSession(req, res, userDirrec[0], userDirrec[1]);


    res.render('MtrInSeUsuario.html', {user: userDirrec[0], dirrec: userDirrec[1]});
});



router.get('/InSeUsuario', async (req, res) => {
    const usu = await getSession(req, res);

    res.render('InSeUsuario.html', { usu: usu});
});

router.get('/MtrCerrarSesion', async (req, res) => {
    
    req.session.destroy();

    res.render('MtrCerrarSesion.html');
});

router.get('/ConfigUsuario', (req, res) => {
    res.render('ConfigUsuario.html');
});

export default router;