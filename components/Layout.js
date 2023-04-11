import Head from "next/head"
import Link from "next/link"

import { useContext, useState, useEffect } from "react"
import { CartContext } from "@/context/Cart"



function Layout({children, title}){

    const {state, dispatch } = useContext(CartContext)

    const cart = state.cart

    const [cartItemsCount, setCartItemsCount] = useState(0)

    useEffect(()=>{
        setCartItemsCount(cart.cartItems.reduce((a,b)=> a+ b.qty, 0))
    },[cart])

    return (
        <>
        <Head>
            <title>{`${title}-Shopping`}</title>
        </Head>
        <div className="flex min-h-screen flex-col justify-between">
            <header>
                <nav className="flex h-140 px-8 justify-between items-center border-b-4 bg-white">
                    <Link href='' className="text-lg font-bold">Shopping</Link>
                    <div>
                        <Link href='/cart' className="p-2">
                            Cart 
                    
                            <span className="ml-1 rounded-xl bg-gray-200 text-xs font-bold px-2 py-1 ">
                                {cartItemsCount}
                            </span>
                        
                            </Link>
                        <Link href='/login' className="p-2">Login </Link>
                        <Link href='/' className="p-2">Home </Link>
                    </div>
                </nav>
            </header>
            <main className="container m-auto mt-4 px-4">{children}</main>
            <footer className="flex justify-center items-center h-10">Footer</footer>
        </div>
        </>

    )

}

export default  Layout                                    