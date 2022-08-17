var express = require('express');
var router = express.Router();



const homeController = require('../controllers/homeController');
const tenisController = require('../controllers/tenisController');
const acessoriosController = require('../controllers/acessoriosController');
const roupasController = require('../controllers/roupasController');
const marcasController = require('../controllers/marcasController');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/home', homeController.index);

router.get('/tenis', tenisController.index);

router.get('/acessorios', acessoriosController.index);

router.get('/roupas', roupasController.index);

router.get('/marcas', marcasController.index);

module.exports = router; 
