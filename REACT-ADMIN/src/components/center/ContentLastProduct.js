import React from "react";
import CategoriesInDb from "./CategoriesInDb";
import LastProduct from "./LastProduct";

function ContentLastProduct() {
  const [product, setProduct] = React.useState({});
  const [lastProducts, setLastProducts] = React.useState(0);
  const [productLast, setProductLast] = React.useState(1);
  const [imageLastProduct, setImageLastProduct] = React.useState(" ");
  
  
  React.useEffect(() => {
    fetch("/api/products/all/")
      .then((respuesta) => {
        return respuesta.json();
      })
      .then((data) => {
        let ultimoReg = data.data[data.data.length - 1].id;
        setProductLast(ultimoReg);
        setProduct(data.data[data.data.length - 1]);
        setLastProducts(ultimoReg);
      })
      .catch((error) => console.log(error));
  }, [lastProducts]);
  // console.log(productLast)

  React.useEffect(() => {
    fetch(`/api/product/${productLast}`)
      .then((respuesta) => {
        // console.log(productLast)
        return respuesta.json();
      })
      .then((data) => {
        setImageLastProduct(data.data.images.productId);
        // console.log(data)
      })
      .catch((error) => console.log(error));
  }, [productLast]);

  return (
    <div className="row ml-1 mr-1">
      {/*<!-- Last Movie in DB -->*/}
      <LastProduct
        dataProduct={product}
        dataImage={imageLastProduct}
      />
      {/*<!-- End content row last movie in Data Base -->*/}

      {/*<!-- Genres in DB -->*/}
      <CategoriesInDb />
      {/*<!--End Genres In Db-->*/}
    </div>
  );
}

export default ContentLastProduct;