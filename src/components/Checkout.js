import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './checkout.css'
import StarIcon from '@material-ui/icons/Star';


function Checkout() {

    const [{ basket }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout_ad" 
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/CBCC_Javed/testimonial/1/V3_1500x600_Herotator_CBCC_1._CB661425196_.jpg"></img>

        {basket?.length === 0 ?(
            <div>
                <h2> Your Shopping basket is Empty  </h2>
            </div>
    ) : ( 
        <div>
            <h2>Your Shopping Basket</h2>
            {basket.map(item => (
                    <CheckoutProduct 
                    id = {item.id}
                    title = {item.title}
                    image = {item.image}
                    rating = {item.rating}
                    price = {item.price}
                    />
            ))}
            
        </div>
    )}
        </div>
    )
}

export default Checkout
