import React, { useState, useEffect } from "react";
import Category from "./Category";

function CategoriesInDb() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/api/categories/all/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        setCategories(data.categories);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <React.Fragment>
      {/*<!-- Categories in DB -->*/}
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-gray-800">
              Totales por categorías
            </h6>
          </div>
          <div className="card-body">
            <div className="row">
              {categories?.map((categories) => {
                return <Category value={categories?.name} key={categories.id} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default CategoriesInDb;