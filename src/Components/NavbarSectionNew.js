import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom';

function NavbarSectionNew() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top" id='navbarSection'>
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/">
                        <img
                            alt=""
                            src="/image/exato_logo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                        Exato</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav m-auto">
                            <li class="nav-item">
                                <Link class="nav-link " aria-current="page" to="/"><HomeIcon style={{ marginRight: "2px" }} />Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/register"><PersonIcon style={{ marginRight: "2px" }} />Register</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/login"><LoginIcon style={{ marginRight: "2px" }} />Login</Link>
                            </li>
                            <li class="nav-item dropdown">
                                <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul class="dropdown-menu">
                                    <li><Link class="dropdown-item" to="/details">Config</Link></li>
                                    <li><Link class="dropdown-item" href="/admin">Admin </Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavbarSectionNew