import './App.css';
import ListaProductos from './components/ListaProductos';
import ProductosFormulario from './components/ProductosFormulario';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DetalleProductos from './components/DetalleProductos';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes >
          <Route path='/' element={<ProductosFormulario />} />
          <Route path='/listaproductos' element={<ListaProductos />} />
          <Route path='/detalleproducto/:id' element={<DetalleProductos/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
