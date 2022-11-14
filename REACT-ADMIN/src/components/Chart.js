import React, { useState, useEffect } from "react";
import DataTable from "react-data-table-component";

const columnas = [
  {
    name: "ID",
    selector: "id",
    sortable: true,
    grow: 0,
  },
  {
    name: "NOMBRE",
    selector: "name",
    sortable: true,
    grow: 4,
  },
  {
    name: "Descripción",
    selector: "description",
    sortable: true,
    grow: 4,
  },
  {
    name: "PRECIO",
    selector: "price",
    sortable: true,
    right: true,
  },
  {
    name: "CATEGORIA",
    selector: "CategoryId",
    sortable: true,
    grow: 1,
  },
];


function Chart() {
  const [tablaProducts, setTablaProducts] = useState([]);
//   const [categoriesTotal, setCategoriesTotal] = React.useState(0);

  useEffect(() => {
    fetch("/api/products/all")
      .then((respuesta) => {
        return respuesta.json({ include: ['Category']});
      })
      .then((data) => {
        setTablaProducts(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

//   React.useEffect(() => {
//     fetch("/api/categories/all/")
//     .then((respuesta) => {
//         return respuesta.json();
//     })
//     .then((data) => {
//         setCategoriesTotal(data.data);
//     })
//     .catch((error) => console.log(error));
// }, []);

  return (
    <div className="content-wrapper">
      <div className="row ml-1 mr-1 mt-4">
        <div className="col-lg-12 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3 bg-warning">
              <h6 className="m-0 font-weight-bold text-gray-800">
                TODOS LOS PRODUCTOS
              </h6>
            </div>
            <div className="card-body table-responsive">
              <DataTable
                columns={columnas}
                data={tablaProducts}
                title="Listado general de productos"
                fixedHeader
                fixedHeaderScrollHeight="300px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;