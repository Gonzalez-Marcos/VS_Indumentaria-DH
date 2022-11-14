import React from 'react';
import { Link } from 'react-router-dom';
import image from '../assets/images/logo-DH.png';

function SideBar() {
    return (
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar" style={{
     backgroundColor: "black"}}>

                {/*<!-- Sidebar - Brand -->*/}
                {/* <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="http://localhost:8080/">
                    <div className="sidebar-brand-icon">
                        
                        <img className="w-100" src={image} alt="Digital House"/>
                        
                    </div>
                </Link> */}
                <a href="http://Localhost:8080/" className="brand-link">
                    <img
                        src={image}
                        alt={"Admin Logo"}
                         className="w-100"
                        style={{ opacity: ".8", width: 50 + "px" }}
                    />
                    <span className="brand-text font-weight-light" style={ {color: "white", textAlign: "center" }}>VS indumentaria</span>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0" />

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - VS Indumentaria</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider" />

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading" style={{ fontSize: 1.5 + "rem"}}>Menú</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="/totales">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Totales</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/allCategorias">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto y Categorías</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="/productos">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Lista de productos</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block" />
            </ul>
            {/*<!-- End of Sidebar -->*/}

        </React.Fragment>
    )
}
export default SideBar;