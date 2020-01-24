import React from 'react'
import {NavLink, Link} from 'react-router-dom';

const Header = () => {
    return(
        <header>
            <Link to="/" className="webname">Gallery Find</Link>
            <nav>
                <NavLink to="/artist" className="Header-Nav">Artist</NavLink>
                <NavLink to="/galleries" className="Header-Nav">Galleries</NavLink>
                <NavLink to="/swipe" className="Header-Nav">Swipe</NavLink>
            </nav>
            <Link to="/messages" className="webname">messages</Link>
            <Link to="/account" className="webname">account</Link>
        </header>
    )
}

export default Header