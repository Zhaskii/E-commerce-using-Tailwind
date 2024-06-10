import React, { useContext } from 'react'
import { cat, products } from './Data/data';
import CartContext from './assets/CartContext';


function Home() {
    let { state, dispatch} = useContext(CartContext)
    return (
        <>
       <div className='bg-green-200'>
  <section className='container mx-auto flex flex-col md:flex-row py-10'>
    <div className='w-full md:w-[30%] shadow md:h-[395px] overflow-y-auto mb-4 md:mb-0'>
      <ul>
        {cat.map((a) => (
          <li key={a} className='uppercase py-[16px]'>{a}</li>
        ))}
      </ul>
    </div>
    <div className='w-full md:w-[70%] shadow'>
      <img className='w-full' src="https://icms-image.slatic.net/images/ims-web/1579a660-df9e-4b5b-8867-6d4d98a049c2.jpg" alt="" />
    </div>
  </section>
  <section className='py-5 bg-green-200'>
    <div className="container mx-auto">
      <h1 className='font-semibold text-3xl pb-10'>Latest Products</h1>
      <div className="flex flex-wrap justify-center md:justify-between">
        {products.map((a) => (
          <div className='p-3 shadow w-full md:w-[31%]' key={a.id}>
            <img className='w-full h-[250px]' src={a.thumbnail} alt="" />
            <h3 className='text-[24px] py-4 text-center'>{a.title}</h3>
            <div className='flex justify-between'>
              <h4 className='font-bold text-[18px] py-1'>${a.price}</h4>
              <button className='bg-[lightgreen] rounded p-2 align-middle my-2' onClick={() => dispatch({ type: 'ADD_TO_CART', payload: a })}>Add To Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
</div>

        </>
    )
}

export default Home
