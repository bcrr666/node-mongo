const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();



const { register } = require('../controllers/users');


router.post('/', [
    check('name', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe de ser más de 6 letras').isLength({ min: 6 }),
    check('email', 'El correo no es válido').isEmail(),
    check('rol').not().isEmpty(), 
], register)

module.exports = router;
