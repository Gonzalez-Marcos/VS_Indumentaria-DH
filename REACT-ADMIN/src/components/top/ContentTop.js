import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */
function ContentTop () {

    const [productTotal, setProductTotal] = React.useState(0);
    const [usersTotal, setUsersTotal] = React.useState(0);
    const [categoriesTotal, setCategoriesTotal] = React.useState(0);

    React.useEffect(() => {
        fetch("/api/products/all/")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            setProductTotal(data.total);
        })
        .catch((error) => console.log(error));
    }, []);

    React.useEffect(() => {
        fetch("/api/categories/all/")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            setCategoriesTotal(data.total);
        })
        .catch((error) => console.log(error));
    }, []);
    
    React.useEffect(() => {
        fetch("/api/users/all/")
        .then((respuesta) => {
            return respuesta.json();
        })
        .then((data) => {
            // console.log(data)
            setUsersTotal(data.total);
          })
          .catch((error) => console.log(error));
      }, []);
    
      return (
        <div className="container-fluid">
          <div className="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 className="h3 mb-0 text-gray-800 mt-3">Dashboard</h1>
          </div>
          <div className="row">
            <SmallCard
              color="primary"
              titulo="Total Productos"
              icono="fas fa-boxes"
              valor={productTotal}
            />
            <SmallCard
              color="warning"
              titulo="Total Categorías"
              icono="fas fa-book-open"
              valor={categoriesTotal}
            />
            <SmallCard
              color="success"
              titulo="Total Usuarios"
              icono="fas fa-user"
              valor={usersTotal}
            />
          </div>
        </div>
      );
      }

// let cartProps = [moviesInDB, totalAwards, actorsQuantity];

// function ContentRowMovies(){
//     return (
    
//         <div className="row">
            
//             {cartProps.map( (movie, i) => {

//                 return <SmallCard {...movie} key={i}/>
            
//             })}

//         </div>
//     )
// }

export default ContentTop;