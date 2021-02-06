import React from 'react'
import './Order.css'
import moment from 'moment'
import CheckoutProduct from '../Checkout/CheckoutProduct'
import CurrencyFormate from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer";

function Order({ order }) {
    
    const [{ basket, user }, dispatch] = useStateValue();
    
    return (
        <div className='order'>
            <h2> Order</h2>
            <p>{moment.unix(order.data.created).format('MMM Do YYY, h:mma')}</p>
            <p className='order__id'>
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                    rating={item.rating}
                    hideButton
              />
                
            ))}
              <CurrencyFormate 
               renderText=
      {(value) => (
        <>
                    <h3> Order Total: {value} </h3>
                    </>
          )}
          decimalScale={2}
          value = {order.data.amount / 100}
          displayType={'text'}
          thousandSeparator={true}
              prefix={'$'}
          />
            

        </div>
    )
}

export default Order
