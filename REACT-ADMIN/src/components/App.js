import React from 'react';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

import {Routes, Route} from 'react-router-dom';
// import CategoriesInDb from './center/CategoriesInDb';
import ContentTop from './top/ContentTop';
// import LastProduct from './center/LastProduct';
import Page404 from './Page404';
import Chart from './Chart';
import ContentLastProduct from './center/ContentLastProduct';

function App() {
  return (
    <React.Fragment>
      	<div id="wrapper">
          <SideBar />
          <Routes>
            <Route path='/' element = {<ContentWrapper />}/>
            <Route path='/productos' element = {<Chart />}/>
            <Route path='/allCategorias' element = {<ContentLastProduct />}/>
            <Route path='/totales' element = {<ContentTop />}/>
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
    </React.Fragment>
  );
}

export default App;
