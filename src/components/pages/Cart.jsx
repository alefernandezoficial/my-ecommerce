import React, { useState, useEffect } from 'react'
import '../../styles/pages/Cart.css'

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://oxopjhhehixxmtfpygcp.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im94b3BqaGhlaGl4eG10ZnB5Z2NwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyMDg2NDEsImV4cCI6MTk5Mzc4NDY0MX0.9PCej7xWs_rJ2YYASW1PHHPWvXXDvDZQrLsccfqfeDI'
const supabase = createClient(supabaseUrl, supabaseKey)

function Cart() {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        async function getProductos() {
            const { data, error } = await supabase.from('productos').select('*')

            if (error) {
                console.log('Error al recuperar productos:', error.message)
            } else {
                setProductos(data)
            }
        }
        getProductos()
    }, [])

    return (
        <div className="Cart">
            {productos.map(producto => (
                <div key={producto.id} className='Cart-item'>
                    <img src={producto.images_url} alt={producto.name} />
                    <h2>{producto.name}</h2>
                    <p>Descripcion: {producto.description}</p>
                    <p>Precio: ${producto.price}</p>
                    <p>Rating: {producto.rating}</p>
                    <p>Categoria: {producto.categoria}</p>
                </div>
            ))}
        </div>
    )
}

export default Cart
