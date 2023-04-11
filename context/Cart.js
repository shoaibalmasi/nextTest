import { createContext, useReducer } from 'react'
import Cookies from 'js-cookie'

export const CartContext = createContext()

const initialState = {
    cart: Cookies.get('cart') ? { cartItems: JSON.parse(Cookies.get("cart"))} : {cartItems: []}
}

function reducer(state, action){
    switch(action.type){
        case 'Add': {
            const newItem = action.payload
            state.cart.cartItems = state.cart.cartItems.filter(e=> e.id != newItem.id)
            const cartItems = [...state.cart.cartItems, newItem]

            Cookies.set('cart',JSON.stringify(cartItems))

            return {...state, cart: {cartItems}}
        }

        case "Delete": {

            const filteredItems = state.cart.cartItems.filter(e=> e.id != action.payload.id)
            Cookies.set('cart',JSON.stringify(filteredItems))
            return {...state, cart:{cartItems: filteredItems}}
        }

        default:
        return state;
    }
}


export function CartContextProvider({children }){
    const [state, dispatch] = useReducer(reducer, initialState)

    const value = {state, dispatch}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>

}


