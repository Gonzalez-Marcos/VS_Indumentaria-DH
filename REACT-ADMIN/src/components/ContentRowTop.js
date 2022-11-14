import React from 'react';
import ContentLastProduct from './center/ContentLastProduct';
import ContentTop from './top/ContentTop';
import Chart from './Chart';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">DATOS DE VS INDUMENTARIA</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentTop />
					<ContentLastProduct />
					<Chart />
	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;