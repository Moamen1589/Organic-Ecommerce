import React, { useContext } from 'react'
import { UserContext } from '../Context/UserDataContext'
import { useState } from 'react'
import NavBar from '../Components/NavBar'
import '../Styles/Shop.css'
function Profile() {
    const { email, password } = useContext(UserContext)
    const [show, setShow] = useState(false)
    const showPass = () => {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }
    return (
        <>
            <NavBar />
            <div className='h-screen flex justify-center items-center shop'>
                <div className='border-2 bg-orange-500 rounded-lg justify-center  basis-1/3 border-orange-500 flex flex-col gap-8 p-5 '>
                    <i className='fa-solid fa-user text-center text-4xl'></i>
                    <h1 className='text-center text-2xl'>User Data</h1>
                    <div className=' text-center'>
                        <span className=''>Email:</span>
                        <span className='mx-6' >{email ? email : 'Not Found'}</span>
                    </div>
                    <div className=' text-center flex justify-evenly items-center '>
                        <span>Password:</span>
                        <input className='bg-transparent text-center  w-28 ' type={show || !password ? 'text' : 'password'} value={password ? password : 'Not Found'} disabled />
                        <button className=' bg-black text-white px-4 py-2 rounded-xl ' onClick={showPass}>Show</button>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Profile