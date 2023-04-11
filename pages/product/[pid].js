import Layout from "@/components/Layout"
import { useRouter } from "next/router"
import Image from "next/image"
import { useContext } from "react"

import productItems from '../../data/product.json'
import { CartContext } from '../../context/Cart'

function ProductPage(){

    const { state, dispatch } = useContext(CartContext)

    const router = useRouter()
    const {query} = useRouter()
    const {pid} = query

    const product = productItems.find(e=> e.slug == pid)

    function addToCartHandler(){
        const checkExist = state.cart.cartItems.find(e=>e.id == product.id)

        const qty = checkExist ? checkExist.qty + 1 : 1
        if(qty> product.count){
            alert('تموم شد')
            return
          }
        dispatch({type: 'Add', payload: {...product, qty}})
        router.push('/cart')
    }



    if(!product){
        return (

        <Layout>
        <div>نداریم</div>
       </Layout>
        )
       
    }


    return(
        <Layout title = {product.title}>
           <div className="grid md:grid-cols-4 md:gap-3 bg-white rounded-xl p-10">
            <div>
                <Image
                className="rounded-xl"
                src={product.image}
                height={340}
                width={340}
                />
            </div>
            <div className="text-lg">
                <h3>{product.title}</h3>
                <p>category: {product.cat}</p>
                <p>{product.desc}</p>

            </div>
            <div>
                <p>price: {product.price}</p>
                <p>{product.count ? 'Available' : 'Unavailable'}</p>
                <button 
                className="rounded-xl bg-gray-700 text-white px-4 py-2 w-full"
                onClick={addToCartHandler}
                >Add to Cart</button>
            </div>

           </div>
        </Layout>
    )

}


export default ProductPage