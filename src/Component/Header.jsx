import React from 'react'
import logo from '../assets/img/logo.jpg'
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Home'
import CartContext from '../assets/CartContext'
import { useContext } from 'react'
import Cart from '../Cart'
import Category from '../Category'

function Header() {
  let {state,dispatch} = useContext(CartContext)
  return (
    <>
   <header className='bg-green-600 text-lime-50'>
  <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
    <div className="flex justify-between items-center w-full md:w-auto">
      <img src={logo} className='w-[250px] py-4' alt="" />
      <h2 className='font-extralight text-[20px] hidden md:block'>-When you think about it, department stores are kind of like museums.</h2>
    </div>
    <div>
      <Link to='/cart' className='relative inline-block'>
        <span className='text-[34px]'><i class="bi bi-cart2"></i></span>
        <span className='absolute bg-[darkgreen] rounded-full px-1 text-xs top-1 right-0 -mt-1'>{state.cart.length}</span>
      </Link>
    </div>
  </div>
</header>
<nav className='bg-lime-400'>
  <ul className='flex flex-col md:flex-row justify-center gap-4 md:gap-[100px] py-4 md:py-0 text-white font-bold'>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/'>Shop</Link></li>
    <li><Link to='/'>About Us</Link></li>
    <li><Link to='/'>Blog</Link></li>
    <li><Link to='/'>Contacts</Link></li>
  </ul>
</nav>

      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/cat/:cid/' element= {<Category />} />
        <Route path='cart' element={<Cart />} />
      </Routes>
    </>
  )
}

export default Header
