import React from 'react'
import Category from './Category'

const Navbar = () => {
    return (
        <div>
            <header id="header">
                <h1><a href="index.html">READABLE</a></h1>
                <nav className="links">
                    <ul>
                        {/* <li><a href="#">CATEGORY</a></li> */}
                        
                        <li><a href="#">lOGIN</a></li>
                        <li><a href="#">SIGN UP</a></li>
                    </ul>

                    
                </nav>
            </header>
            <div >
                <Category/>
            </div>
        </div>
    )
}

export default Navbar

