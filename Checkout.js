import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import { getBasketTotal } from './Reducer'
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue()
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img
          className='checkout_ad'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_LP_Hero_HD_NG_en_US.png'
          alt=''
        />

        <div>
          <h3>Hello, {user?.email}</h3>
          <h2 className='checkout_title'>Your shopping Basket</h2>

          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}

          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
          {/*BasketItem*/}
        </div>
      </div>

      <div className='checkout_right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout
