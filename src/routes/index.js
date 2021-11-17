const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index.html');
});

router.get('/Tienda', (req, res) => {
    res.render('Tienda.html');
});

router.get('/Carrito', (req, res) => {
    res.render('Carrito.html');
});

router.get('/InSeAdministrador', (req, res) => {
    res.render('InSeAdministrador.html');
});

router.get('/RegistroAdmin', (req, res) => {
    res.render('RegistroAdmin.html');
});

router.get('/InSeUsuario', (req, res) => {
    res.render('InSeUsuario.html');
});

router.get('/ConfigUsuario', (req, res) => {
    res.render('ConfigUsuario.html');
});

module.exports = router;