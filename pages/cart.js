import Layout from "@/components/Layout";
import { useContext } from "react";
import { CartContext } from "@/context/Cart";
import Image from "next/image";
import Modal from "@/components/Modal";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";


function CartPage() {
  const { state, dispatch } = useContext(CartContext);

  const router = useRouter()

  const {
    cart: { cartItems },
  } = state;

  function removeFromCartHandler(id){

    console.log('herrrrrrrrrrrrreeeeeeeee');
    const product = state.cart.cartItems.find(e=>e.id == id)
   console.log({product});
    if(!product) {
      alert('محصول یافت نشد')
      return
    }
    dispatch({type: 'Delete', payload: {...product}})
}

  return (
    <Layout title="Cart">
      <div className="flex flex-col">
        <div className="mb-5 p-3">
          <h1 className="mb-4 text-xl">Shopping Cart</h1>
          <p>
            {cartItems.length
              ? `${cartItems.length} product is in cart `
              : "There are no products in the shopping cart"}
          </p>
        </div>
        <div className="p-5 flex justify-center">
          <table className="min-w-full table-auto">
            <thead className="bg-green">
              <tr className="border-b-4">
                <th className="text-left" >id</th>
                <th className="text-left" >title</th>
                <th className="text-left" >price</th>
                <th className="text-left" >qty</th>
                <th className="text-left" >imege</th>
                <th className="text-left" >action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => {
                return (
                  <tr className="border-b-4" key={item.id}>
                    <td className="text-left">{item.id}</td>
                    <td className="text-left">{item.title}</td>
                    <td className="text-left">{item.price}</td>
                    <td className="text-left">{item.qty}</td>
                    <td className="text-left">
                     
                      <Image
                        className="rounded-xl"
                        src={item.image}
                        height={70}
                        width={70}
                        alt={item.title}
                      />
                    </td>
                    <td> <button className="rounded-xl bg-gray-700 text-white px-4 py-2" onClick={removeFromCartHandler.bind(null,item.id)}>Delete</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="p-5">
          Total Price: {' '}
          {cartItems.reduce((a,b)=> a+ b.price*b.qty,0 )}
        </div>
        <div className="p-5">
          <button className="rounded-xl bg-gray-700 text-white px-4 py-2" onClick={()=>router.push('login?redirect=/checkout')}>checkout</button>
        </div>
        <div>

        </div>
      </div>
    </Layout>
   
  );
}

export default dynamic(() => Promise.resolve(CartPage),{ssr:false});
