import React from 'react'
import StarIcon from '@material-ui/icons/Star';
import './Product.css'
import {useStateValue} from './StateProvider'

function Product({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
                id:id,
                title: title,
                image:image,
                price:price,
                rating:rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <strong className="product_price">  Rs {price} </strong>
            {
                Array(rating)
                .fill()
                .map((_)=> (
                    <StarIcon/>
                ))
            }
            </div>
            
            <img src={image} ></img>
            <button onClick={addToBasket}> Add to Cart </button>
        </div>
    )
}

export default Product



