
import React from 'react'
import logCart from '../assets/carrito-de-supermercado.png'

export default function CartWidget() {
  return (
    <a class="navbar-brand " href="#">
    <img className='cart-log' src={logCart} alt="" width="40" height="34"/>
    </a>
  )
}

