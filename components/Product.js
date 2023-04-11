import Link from "next/link";
import { useContext } from "react"
import { CartContext } from '../context/Cart'
import productItems from '../data/product.json'


function Product({item}) {

  const { state, dispatch } = useContext(CartContext)


  function addToCartHandler(id){
    const checkExist = state.cart.cartItems.find(e=>e.id == id)
    const qty = checkExist ? checkExist.qty + 1 : 1
    const product = productItems.find(e=> e.id == id)

    if(qty> product.count){
      alert('نشد دیگه')
      return
    }
   
    dispatch({type: 'Add', payload: {...product, qty}})
}

    // console.log({item});
  return (
    <div className="bg-white rounded-xl mb-5 block">
      <Link href={`/product/${item.slug }`}>
      <img src={item.image} className="rounded-t-xl"/>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${item.slug }`}>
        <h2 className="text-lg">{item.title}</h2>
        </Link>
        <p className="p-2">{item.price}</p>
        <button className="rounded-xl bg-gray-700 text-white px-4 py-2" onClick={addToCartHandler.bind(null,item.id)}>Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
