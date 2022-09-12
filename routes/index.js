var express = require('express');
var router = express.Router();



const homeController = require('../controllers/homeController');
const organizadorController = require('../controllers/organizadorController');
const calendarioController = require('../controllers/calendarioController');
const loginController = require('../controllers/loginController');


/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/home', homeController.index);

router.get('/organizador', organizadorController.index);

router.get('/calendario', calendarioController.index);

router.get('/login', loginController.index);



module.exports = router; 
