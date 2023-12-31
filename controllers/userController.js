const { response, request } = require('express');
const bcryptjs = require('bcryptjs');

const User = require('../models/user')

const register = async(req, res = response) => {
    const { name, email, password, rol } = req.body
    const user = new User({ name, email, password, rol })

    const salt = bcryptjs.genSaltSync(10)
    user.password = bcryptjs.hashSync(password, salt)

    await user.save()

    res.json({
        msg: `El usuario ${user.name} fue registrado correctamente`,
        user
    })
}

const list = async(req = request, res = response) => {
    const [ users ] = await Promise.all([
        User.find({})
    ])

    res.json({
        'msg': 'Lista de usuarios',
        users
    })
}

module.exports = {
    register,
    list
}