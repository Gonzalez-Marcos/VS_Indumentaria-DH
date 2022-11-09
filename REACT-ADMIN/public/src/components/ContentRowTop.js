import React from 'react';

import ContentRowMovies from './ContentRowMovies';

import imagenFondo from '../assets/images/mandalorian.jpg'

function ContentRowTop(){
	/*<!-- contenido de las 2 columnas -->*/
	const dataRowMovies = [
		{
			color: 'primary',
			text: 'Total Ventas',
			quantity: '$10.000',
			icon: 'film'
		},		
		{
			color: 'success',
			text: 'Cantidad Vendidos',
			quantity: 20,
			icon: 'award'
		}
	];
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<div className="row">
						{/*<!-- llama a dataRowMovies para que se visualice las 3 columnas -->*/}
						{
							dataRowMovies.map((row, key) =>
								<ContentRowMovies 
								key={key} 
								color={row.color} 
								text={row.text} 
								quantity={row.quantity} 
								icon={row.icon}/>
							)
						}

					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<div className="col-lg-12 mb-6">
							<div className="card shadow mb-6">
								<div className="card-header py-3">
									<h5 className="m-0 font-weight-bold text-gray-800">Historial de carga de los productos</h5>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
								</div>
							</div>
						</div>
						
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;