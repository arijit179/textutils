import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';


export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/textutils" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.title}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/textutils" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.about}</Link>
                        </li>
                    </ul>
                    {/* <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-primary" type="submit">Search</button>
                    </form> */}
                    {/* <div className="d-flex">
                        <div className="bg-primary mx-2" onClick={() => { props.toogleMode('primary') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                        <div className="bg-danger mx-2" onClick={() => { props.toogleMode('danger') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                        <div className="bg-success mx-2" onClick={() => { props.toogleMode('success') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                        <div className="bg-warning mx-2" onClick={() => { props.toogleMode('warning') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                        <div className="bg-light mx-2" onClick={() => { props.toogleMode('light') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                        <div className="bg-dark mx-2" onClick={() => { props.toogleMode('dark') }} style={{ width: '30px', height: '30px', borderRadius: '150px', cursor: 'pointer' }}></div>
                    </div> */}
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onClick={props.toogleMode} />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><b>Dark Mode</b></label>
                    </div>
                </div>
            </div>
        </nav>
    );
}
Navbar.propTypes = {
    title: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    title: 'Set title here',
    about: 'About'
}