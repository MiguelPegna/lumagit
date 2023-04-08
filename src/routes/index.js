const {Router} = require('express');
const {viewIndex, viewAbout, viewServicios, viewContacto, viewClientes} = require('../controllers/IndexController');
const router = Router();

router.get('/', viewIndex);
router.get('/nosotros', viewAbout);
router.get('/servicios', viewServicios);
router.get('/contacto', viewContacto);
router.get('/clientes', viewClientes);

module.exports = router;