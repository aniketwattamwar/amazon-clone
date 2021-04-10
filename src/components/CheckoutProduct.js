import React from 'react'
import './CheckoutProduct.css'
import StarIcon from '@material-ui/icons/Star';
import { useStateValue } from './StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {

    const [{ basket },dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutProduct">
            <img className="checkout_product_image" src={image}></img>
            <div className="checkout_product_info">
                <p className="checkout_product_title">{title}</p>
                <strong className="checkout_product_price">  Rs {price} </strong>
            {
                Array(rating)
                .fill()
                .map((_)=> (
                    <StarIcon/>
                ))
            }
            <button onClick={removeFromBasket}> Remove from Basket</button>
            </div>
            
        </div>
    )
}

export default CheckoutProduct
