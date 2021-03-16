import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
      <div className='home_container'>
        <img
          className='home_image'
          src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg'
          alt=''
        />

        <div className='home_row'>
          <Product
            id='17789290'
            title='The Lean Start-Up: How Constant Innovation Creates Radically successful Business Paperback'
            price={29.99}
            image='https://m.media-amazon.com/images/I/71LfEpHffkL._AC_UL320_.jpg'
            rating={3}
          />

          <Product
            id='39987021'
            title='Minecraft - Nintendo Switch'
            price={59.99}
            image='https://images-na.ssl-images-amazon.com/images/I/71dIHv1zh7L._SY445_.jpg'
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='17552759'
            title='amFilm Tempered Glass Screen Protector for Nintendo Switch 2017 (2-Pack)'
            price={7.99}
            image='https://m.media-amazon.com/images/I/41o69rKrTPL._AC_SY200_.jpg'
            rating={2}
          />
          <Product
            id='52186106'
            title='Alex Vando Mens Dress Shirts Regular Fit Long Sleeve Men Shirt'
            price={22.99}
            image='https://m.media-amazon.com/images/I/41XMZLW8zbL._AC_SY200_.jpg'
            rating={4}
          />
          <Product
            id='21778490'
            title='HP Pavilion X360 2-IN-1 11.6" HD Touch-Screen WLED-backlit Laptop, Intel Pentium N5000 up to 2.7GHz, 4GB DDR4, 128GB SSD,Wireless-AC, USB 3.1-C, Windows 10'
            price={449.0}
            image='https://m.media-amazon.com/images/I/61bf4QPQ0hL._AC_UY218_.jpg'
            rating={5}
          />
        </div>

        <div className='home_row'>
          <Product
            id='11872009'
            title='SAMSUNG 50-inch Class QLED Q60T Series - 4K UHD Dual LED Quantum HDR Smart TV with Alexa Built-in (QN50Q60TAFXZA, 2020 Model'
            price={399.99}
            image='https://m.media-amazon.com/images/I/61fKzrson-L._AC_UY218_.jpg'
            rating={5}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
