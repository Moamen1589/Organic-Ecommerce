import React from 'react'

function ItemsOfSale() {
    return (
        <div className='  h-max flex gap-5 justify-center p-6 max-lg:flex-col' data-aos='fade-left' data-aos-duration='1000'>
            <div className='first-Photo relative '>
                <div className=' text-white absolute h-full content-center ml-20 text-3xl font-bold leading-loose max-sm:text-xl'>
                    <h1>Items on SALE </h1>
                    <p>Discounts up to 30%</p>
                </div>
                <img className=' w-full h-full' src={'/Images/banner-ad-1.webp'} loading='lazy' alt='img' />
            </div>
            <div className='twice-photo flex flex-col justify-between'>
                <div className='relative'>
                    <div className=' text-white absolute h-full content-center ml-20 text-3xl font-bold leading-loose max-sm:text-xl'>
                        <h1>Combo offers</h1>
                        <p>Discounts up to 50%</p>
                    </div>
                    <img className=' w-full ' src={'/Images/banner-ad-2.webp'} loading='lazy' alt='img' />
                </div>
                <div className='relative'>
                    <div className=' text-white absolute h-full content-center ml-20 text-3xl font-bold leading-loose max-sm:text-xl'>
                        <h1>Discount Coupons</h1>
                        <p>Discounts up to 40%</p>
                    </div>
                    <img className=' w-full ' src={'/Images/banner-ad-3.webp'} loading='lazy' alt='img' />
                </div>
            </div>
        </div>
    )
}

export default ItemsOfSale