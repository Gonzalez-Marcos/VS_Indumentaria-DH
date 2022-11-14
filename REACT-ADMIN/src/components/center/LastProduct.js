
import React from 'react'

function LastProduct ({ dataProduct, dataImage}) {

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Detalle de último producto</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 20 +'rem'}} src={`http://localhost:3001/images/products/${dataImage}`} alt="Vs Indumentaria" />
                    </div>
                    <hr />
                    
                        
                        <div className="row">
                            {/* <h4 className='text-secondary mt-1' style={{textDecoration: 'line-through'}}>$ {dataProduct.price}</h4>  */}
                            {/* <h3 className="ml-2">$ {(dataProduct.price - (dataProduct.price * (dataDiscount * 0.01))).toFixed(2)}</h3> */}
                        </div>
                        
                            <h3>$ {dataProduct.price}</h3>
                    
                    <hr />
                    <h5 className="text-uppercase text-success"><strong>{dataProduct.name}</strong></h5>   
                <a className="btn btn-danger" target="_blank" rel="nofollow noreferrer" href={`http://localhost:8080/products/${dataProduct.id}`}>Ver detalles del producto</a>
                </div>
            </div>
        </div>
    )
}

export default LastProduct