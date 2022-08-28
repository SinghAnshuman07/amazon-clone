import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className='home_container'>
            <img
                className='home_image' 
                src="https://assets.beartai.com/uploads/2022/08/prime-video-th.jpg" 
                alt=''
            />

            <div className='home_row'>
                <Product 
                    id="34543562"
                    title="The Immortals Of Meluha (Shiva Trilogy Book 1)
                    Book 1 of 3: The Shiva Trilogy  | by Amish Tripathi  | Jul 25, 2022" 
                    price={9.99}
                    image="https://pinakinmart.com/wp-content/uploads/2021/03/meluha-1.jpg"
                    rating={5}
                />
                <Product 
                    id="96793646"
                    title="iLuv TB100 Wireless Earbuds, Bluetooth 5.3, Built-in Microphone,
                    20 Hour Playtime, IPX6 Waterproof Protection, Compatible with Apple & Android, 
                    Includes Charging Case & 4 Ear Tips, Black" 
                    price={19.99}
                    image="https://images-na.ssl-images-amazon.com/images/I/71x-uBzeRfL.__AC_SX300_SY300_QL70_FMwebp_.jpg"
                    rating={4}
                />
            </div>

            <div className='home_row'>
                <Product 
                    id="13293574"
                    title="HP Pavilion 15 Laptop, 11th Gen Intel Core i7-1165G7 Processor, 16 GB RAM, 512 GB SSD..." 
                    price={899.8}
                    image="https://m.media-amazon.com/images/I/7156VgoIhdL._AC_SX679_.jpg"
                    rating={4}
                />
                <Product 
                    id="2786696"
                    title="Clarks Men's Tilden Cap Oxford Shoe"
                    price={54.67}
                    image="https://m.media-amazon.com/images/I/71yuLKdQm8L._AC_UY500_.jpg"
                    rating={3}    
                />
                <Product 
                    id="5243590"
                    title="FITVII Fitness Tracker, Smart Watch with 24/7 Blood Pressure Heart Rate and Blood Oxygen..." 
                    price={44.99}
                    image="https://m.media-amazon.com/images/I/51yPuOPi2jL._AC_SX569_.jpg"
                    rating={4}
                />
            </div>

            <div className='home_row'>
                <Product 
                    id="75632645"
                    title="LUFEIYA Small Computer Desk White Writing Table for Home Office Small Spaces 31 Inch Modern Student 
                    Study Laptop PC Desks with Gold Legs Storage Bag Headphone Hook,White Gold"
                    price={69.89}
                    image="https://m.media-amazon.com/images/I/71FaDG3LLnL._AC_SX679_.jpg"
                    rating={5}
                />
            </div>
        </div>
    </div>
  )
}

export default Home