import React from 'react'
import '../Styles/footer.css'
function Footer() {
    return (
        <div className=' footer border-t border-black text-center p-4  bg-white'>
            <div className='flex flex-col items-center'>
                <img className=' my-9' src={'/Images/logo.svg'} alt='/' />
                <div >
                    <i className="fa-brands fa-facebook text-black text-3xl hover:text-yellow-500 mx-3"></i>
                    <i className="fa-brands fa-twitter text-black text-3xl hover:text-yellow-500 mx-3"></i>
                    <i className="fa-brands fa-instagram text-black text-3xl hover:text-yellow-500 mx-3"></i>
                    <i className="fa-brands fa-youtube text-black text-3xl hover:text-yellow-500 mx-3"></i>
                    <i className="fa-brands fa-amazon text-black text-3xl hover:text-yellow-500 mx-3"></i>
                </div>
            </div>
            <div>
                <ul className='h-full flex flex-col justify-evenly'>
                    <h1 className='text-2xl font-bold'>Organic</h1>
                    <li>About us</li>
                    <li>Conditions</li>
                    <li>Our Journals</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className='h-full flex flex-col justify-evenly'>
                    <h1 className='text-2xl font-bold'>Quick Links</h1>
                    <li>About us</li>
                    <li>Conditions</li>
                    <li>Our Journals</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div>
                <ul className='h-full flex flex-col justify-evenly'>
                    <h1 className='text-2xl font-bold'>Customer Services</h1>
                    <li>About us</li>
                    <li>Conditions</li>
                    <li>Our Journals</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className='content-center '>
                <h1 className='text-2xl font-bold'>Subscibe Now</h1>
                <input className=' shadow-sm shadow-black p-1 mt-5  ' type='email' placeholder='Enter Email' />
                <button className='bg-gray-950 p-1 text-white'>Subscribe</button>
            </div>

        </div>
    )
}

export default Footer