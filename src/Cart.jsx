import React, { useContext } from 'react'
import CartContext from './assets/CartContext'
import { Link } from 'react-router-dom'

function Cart() {
    let { state, dispatch } = useContext(CartContext)
    return (
        <>
         {state.cart.map((a) => (
            <div className="h-screen bg-gray-100 pt-20">
                <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
                <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                    <div className="rounded-lg md:w-2/3">
                       
                            <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <img src={a.thumbnail} alt="product-image" className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{a.title}</h2>
                                        <p className="mt-1 text-xs text-gray-700">{a.description}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                                            <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" defaultValue={2} min={1} />
                                            <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
                                        </div>
                                        <div className="flex items-center space-x-4">
                                            <p className="text-sm font-bold">${a.price}</p>
                                            <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500" onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: a })}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                        <Link to='/'>
                        <div className="mt-6 h-full rounded-lg  p-6  md:mt-0 md:w-1/3">
                            <button className="mt-6 w-full shadow-md rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
            ))}
        </ >
    )
}

export default Cart
