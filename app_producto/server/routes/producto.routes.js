const ControladorProductos = require('../controllers/producto.controllers')

module.exports = (app) =>{
    app.get('/api/obtenerproductos', ControladorProductos.obtenerProductos)
    app.post('/api/crearproducto', ControladorProductos.crearProductos)
    app.get('/api/detalleproducto/:id', ControladorProductos.obtenerDetalleProducto)
   // app.delete('/api/borrarserie/:id', ControladorSeries.eliminarSerie)
   // app.put('/api/editarserie/:id', authenticate, ControladorSeries.editarSerie)
    
}