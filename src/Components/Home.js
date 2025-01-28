import React from 'react'
import '../Styles/Home.css'
import SideCart from './SideCart'
import LandStat from './LandStat';
import ItemsOfSale from './ItemsOfSale';
import DownloadApp from './DownloadApp';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
function Home() {
    return (
        <>
        <NavBar/>
            <SideCart />
            <div className="Land h-screen m flex items-center pt-12 max-sm:pt-36  ">
                <div className='intro-land flex  gap-10 flex-col justify-evenly  basis-4/5 max-lg:basis-full content-center p-7 max-sm:w-full '>
                    <h1 className=' text-8xl  max-md:text-5xl max-md:leading-relaxed leading-normal'><span className='text-green-600 font-bold'>Organic</span> Foods at your<span className=' font-bold'>Doorsteps</span></h1>
                    <p className=' text-gray-500 text-3xl '>Dignissim massa diam elementum.</p>
                    <Link to={'/shop'} className=' w-fit bg-main  ml-5 text-white py-5 px-8 rounded-full'>Start Shopping</Link>
                    <div className='stat'>
                        <LandStat />
                    </div>
                </div>
            </div>
            <ItemsOfSale />
            <DownloadApp/>
            <Footer/>
           
        </>
    )
}

export default Home
