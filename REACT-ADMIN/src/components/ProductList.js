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
        </table>
    )
}
export default ProductList;