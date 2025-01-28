import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserDataContext";
import NavBar from "../Components/NavBar";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
export default function SignIn() {
    const { email, password } = useContext(UserContext)
    const [emailError, SetEmailError] = useState(false)
    const [passError, SetPassError] = useState(false)
    const [submitedEmail, setSubmitedEmail] = useState()
    const [submitedPass, setSubmitedPass] = useState()
    const { addEmail, addPassword } = useContext(UserContext)
    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig
    const navigate = useNavigate()

    const emailCheck = (value) => {
        if (!emailReg.test(value)) {
            SetEmailError(true)
            setSubmitedEmail(null)
        } else {
            SetEmailError(false)
            setSubmitedEmail(value)
        }
    }
    const passCheck = (value) => {
        if (value.length >= 8) {
            SetPassError(false)
            setSubmitedPass(value)
        } else {
            SetPassError(true)
            setSubmitedPass(null)
        }
    }

    const handleSubmit = () => {

            if (submitedEmail === window.sessionStorage.getItem('email') && submitedPass === window.sessionStorage.getItem('pass')) {
                toast.success('sign in successfully', {
                    autoClose: 2000,
                    onClose: () => navigate('/shop')
                })
                addEmail(submitedEmail)
                addPassword(submitedPass)

            } else {
                Swal.fire({
                    titleText: 'Invaild Email Or Password',
                    showConfirmButton: true
                })
            }      
    }

    return (
        <>
            <NavBar />
            <div className="signIn flex  bg-white min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={'/Images/logo.webp'}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    onBlur={() => SetEmailError(false)}
                                    onChange={(e) => emailCheck(e.target.value)}
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                                />
                            </div>
                            <p className={emailError ? "text-red-600  mt-3 rounded-md " : 'hidden'}> Please enter a valid email</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onBlur={() => SetPassError(false)}
                                    onChange={(e) => passCheck(e.target.value)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                                />
                            </div>
                            <p className={passError ? "text-red-600  mt-3 rounded-md " : 'hidden'}> password must be at least 8 character</p>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                onClick={handleSubmit}
                            >
                                Sign in

                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-xl text-black ">
                        Not Have Account?
                        <Link to={'/signup'} className="font-semibold text-orange-500 hover:text-orange-300 ml-2">
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
