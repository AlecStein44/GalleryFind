import React from 'react'
import {NavLink, Link} from 'react-router-dom';

const Header = () => {
    let username = sessionStorage.getItem('username')
    return(
        <header>
            <Link to="/" className="webname">Gallery Find</Link>
            <nav>
                <NavLink to="/artist" className="Header-Nav">Artist</NavLink>
                <NavLink to="/galleries" className="Header-Nav">Galleries</NavLink>
                <NavLink to="/swipe" className="Header-Nav">Swipe</NavLink>
            </nav>
            <div className="Header-Butttons">
                <Link to="/messenger" className="webname">messages</Link>
                {sessionStorage.getItem('id') === null ? <Link to="/login" className="webname">Log In</Link> : <Link to="/account" className="webname">{username}</Link>}
                {sessionStorage.getItem('id') === null ? <Link to='/signup' className="webname">Sign Up</Link> : <button to="/signout" className="webname" onClick={function(){sessionStorage.clear();window.location.reload(false);}}>Sign Out</button>}
            </div>
        </header>
    )
}

export default Header