const { response, request } = require('express');

const User = require('../models/user')

const register = async(req, res = response) => {
    console.log(req.body);
    /*
    const { name, email, password, rol } = req.body
    const user = new User({ name, email, password, rol })

    await user.save()

    res.json({
        msg: 'holi',
        user
    })
    */
}

module.exports = {
    register
}