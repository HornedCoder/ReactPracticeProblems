import React from 'react'
import { useCart } from './CartContext'

const Seventeen = () => {

    const {cartState, cartDispatch} = useCart()
    
    const addToCart = (item) => {
        const existingCartItems = cartState.cartItems.find((cartItem)=> cartItem.id === item.id);
        if(existingCartItems){
            cartDispatch({type:'UPDATE_QUANTITY', payload:{id:item.id, quantity: existingCartItems.quantity+1}})
        }
        else{
            cartDispatch({type:'ADD_TO_CART', payload:{...item, quantity:1}})
        }
    }

    const products = [
        {id: 1, name: 'Product1'},
        {id: 2, name: 'Product2'},
        {id: 3, name: 'Product3'}
    ]
  return (
    <div>
        <h2>Shopping List</h2>
        <ul>
            {cartState.cartItems.map((item)=> (
                <li key ={item.id}>
                    {item.name} - {item.quantity}
                </li>
            ))}
        </ul>
        <h2>Product List</h2>
        <ul>{
            products.map((product)=>(
                <li key ={product.id}>
                    {product.name}<button onClick={()=>addToCart(product)}>Add to Cart</button>
                </li>
            ))
            }
        </ul>
    </div>
  )
}

export default Seventeen