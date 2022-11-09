import React from "react";

const ProductList = ({productos}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Talle</th>
                    <th>Letras</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto => (
                    <tr key={producto.id}>
                        <th>{producto.id}</th>
                        <th>{producto.Nombre}</th>
                        <th>{producto.Precio}</th>
                        <th>{producto.Talle}</th>
                        <th>{producto.Letras}</th>
                    </tr> 
                ))}
            </tbody>
        </table>
    )
}
export default ProductList;