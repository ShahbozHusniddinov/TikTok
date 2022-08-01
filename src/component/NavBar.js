import React from 'react'
import Tik from "./images/tiktok-logo.svg"

function NavBar() {
    return(
        <div className='max-width'>
            <div className='navbar'>
                <div className='navbar-img'>
                    <img src={Tik} alt="" />
                </div>
                <div className='navbar-ul'>
                    <ul className='ul-1'>
                        <li>Product</li>
                        <li>Resources</li>
                        <li>Exports</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div className='navbar-ul2'>
                    <ul className='ul-2'>
                        <li>Book a demo</li>
                        <li>Log in</li>
                        <button className='btn'>
                            <a href="#">Try for free</a>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    )
}
 
export default NavBar;
