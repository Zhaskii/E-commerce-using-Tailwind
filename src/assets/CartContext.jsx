import React, { createContext,useReducer} from 'react'

let CartContext = createContext()
let cartReducer = (state,action) =>{
    switch(action.type){
        case 'ADD_TO_CART' : return{ ...state, cart: [...state.cart, {...action.payload}]}
        case 'REMOVE_FROM_CART' : return{...state, cart: state.cart.filter((item)=> item.id !== action.payload.id) }
    }
}
export let CartPovider = ({children}) => {
    let [ state, dispatch ] = useReducer(cartReducer, { cart: []})
  return (
    <CartContext.Provider value={{state, dispatch}} >
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
