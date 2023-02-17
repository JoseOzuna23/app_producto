const Productos = require ('../models/producto.models')

const obtenerProductos = (req, res)=>{
    Productos.find(req.body)
    .then((resultado)=>{
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })

}
const crearProductos = (req, res)=>{
    Productos.create(req.body)
    .then((resultado)=>{
        console.log(req.body)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)

    })
}
const obtenerDetalleProducto = (req, res)=>{
    Productos.findById(req.params.id)
    .then((resultado)=>{
        console.log(resultado)
        res.json(resultado)
    }).catch((error)=>{
        console.log(error)
    })
}

module.exports = {
    crearProductos,
    obtenerProductos,
    obtenerDetalleProducto
}
