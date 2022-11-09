import React, {Fragment, useState, useEffect} from "react";
import ProductList from "./ProductList";

function Products(){

    const [productos, setProductos] = useState([])

    useEffect(()=>{
        const getProductos = () => {
            fetch('http://localhost:8080')
            .then(res => res.json())
            .then(res => setProductos(res))
        }
        getProductos()
    }, [])

    return(
        <Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-7">
                        <h2 style={{textAlign: 'center'}}>Lista de productos</h2>
                        <ProductList productos={productos}/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Products;