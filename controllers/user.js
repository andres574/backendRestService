const { response, request } = require('express')

const usuariosGet = (req, res = response) => {
    const { q = 'no data', nombre, apikey } = req.query
    res.json({
        // ok: true,
        msg: 'get Api - controlador',
        nombre,
        apikey,
        q
    })
}
const usuariosPost = (req, res = response) => {

    const { nombre, edad } = req.body
    res.json({
        // ok: true,
        msg: 'post Api - controlador',
        nombre,
        edad,

    })
}
const usuariosPut = (req, res = response) => {
    const id = req.params.id
    res.json({
        // ok: true,
        msg: 'Put Api - controlador',
        id
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        // ok: true,
        msg: 'patch Api - controlador'
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        // ok: true,
        msg: 'Delete Api - controlador'
    })
}



module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosDelete,
    usuariosPatch,
    usuariosPut
}