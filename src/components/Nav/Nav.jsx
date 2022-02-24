import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import{NavLink} from 'react-router-dom'


const Nav = () => {
  return (
     <nav className='navbar navbar-expand-lg navbar-light bg-light'>
         <div class="container">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                <ul class="nav ">
                    <li class="nav-item">                   
                    <NavLink className="nav-link active" to={"/"}>Home</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link active" to={"/category/delivery"}>Delivery</NavLink>
                    </li>
                    <li class="nav-item">
                    <NavLink className="nav-link active" to={"/category/frio"}>Frio</NavLink>
                    </li>
                  
                </ul>
              
            </div>
           <CartWidget className='cart-log'/>
         </div>
        
    </nav>
  )
}

export default Nav