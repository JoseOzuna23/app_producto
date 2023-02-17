import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'


const DetalleProductos = () => {
    const [producto, setProducto] = useState({})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {

        axios.get(`http://localhost:8000/api/detalleproducto/${id}`)
            .then((res) => {
                console.log(res)
                setProducto(res.data)
            }).catch((error) => {
                console.log(error)
            })


    }, []);

    return (
        <div>               
            <h4>{producto.titulo}</h4>
            <p>{producto.precio}</p>
            <p>{producto.descripcion}</p>


        </div>
    )
}

export default DetalleProductos
