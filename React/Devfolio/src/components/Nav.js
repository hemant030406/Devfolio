import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {

    const [focused, setFocused] = React.useState(false)
    const onFocus = () => setFocused(true)
    const onBlur = () => setFocused(false)

    const suggestionBox=document.querySelector(".suggestion-box");
    if(focused){
        if(suggestionBox != null){
            suggestionBox.style.visibility = 'visible'
          }
    }
    else{
        if(suggestionBox != null){
            suggestionBox.style.visibility = 'hidden'
            suggestionBox.innerHTML = ''
          }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-warning fixed-top" style={{ backgroundColor: 'black' }}>
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <div className="logo">
                            <div className="logo-image"></div>
                        </div>
                        <ul className="navbar-nav">
                            <li className="nav-item mx-2 active-nav-head">
                                <Link className="nav-link nav-heads" aria-current="page" to="/" style={{color:'white'}}>Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link nav-heads" aria-current="page" to="/tea" style={{color:'white'}}>Tea</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link nav-heads" to="/coffee" style={{color:'white'}}>Coffee</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link nav-heads" to="/juice" style={{color:'white'}}>Juice</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link nav-heads" to="/cart" style={{color:'white'}}>Cart</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link nav-heads" to="/aboutUs" style={{color:'white'}}>About Us</Link>
                            </li>
                        </ul>
                        <div className="location mx-3">
                            <div className="location-logo">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="location-name">Deliver to Delhi</div>
                        </div>
                        <div className='search mx-3'>
                            <i className="fa-solid fa-magnifying-glass mx-3 my-3"></i>
                            <form className="d-flex" role="search" >
                                <input className="form-control me-2 input-box" type="search" placeholder="Search here" aria-label="Search" data-search onFocus={onFocus} onBlur={onBlur}/>
                            </form>
                        </div>
                        <button className='mx-5 sign-in'>
                            <Link className="nav-link" aria-current="page" to="/signin" style={{ display: 'flex',textDecoration:'None',textDecorationColor:'black'}}>
                                <div className="sign-icon">
                                    <i className="fa-solid fa-user"></i>
                                </div>
                                <div className="sign-name mx-1">Sign In
                                </div>
                            </Link>
                        </button>
                    </div>
                </div>
            </nav >
        </div >
    )
}
