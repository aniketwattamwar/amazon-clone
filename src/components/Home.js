import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className="home">
            <img 
            className="home_image"
            src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
            />

        <div className="home_row">
        <Product
                id="23423"
                title="The Godfather"
                price={599}
                rating={4}
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K2AW8H110jx75J-rerfaxgHaNi%26pid%3DApi&f=1"
            />

        <Product
                id="23423"
                title="The Godfather"
                price={599}
                rating={4}
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K2AW8H110jx75J-rerfaxgHaNi%26pid%3DApi&f=1"
            />
        </div>

            <div className="home_row">
            <Product
                id="23423"
                title="The Godfather"
                price={599}
                rating={4}
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K2AW8H110jx75J-rerfaxgHaNi%26pid%3DApi&f=1"
            />
            <Product
                id="23423" 
                title="The Godfather"
                price={599}
                rating={4}
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K2AW8H110jx75J-rerfaxgHaNi%26pid%3DApi&f=1"
            />
            <Product
                id="23423"
                title="The Godfather"
                price={599}
                rating={4}
                image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.K2AW8H110jx75J-rerfaxgHaNi%26pid%3DApi&f=1"
            />
            </div>

            
        </div>
    )
}

export default Home
