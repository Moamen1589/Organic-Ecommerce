import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserDataContext";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "../Components/NavBar";
import Swal from "sweetalert2";
export default function SignUp() {
    const [emailValue, setEmailValue] = useState()
    const [passValue, setPassValue] = useState()
    const [re_pass_value, set_Re_PassValue] = useState()
    const [emailError, SetEmailError] = useState(false)
    const [passError, SetPassError] = useState(false)
    const [re_passError, Set_re_PassError] = useState(false)
    const navigate = useNavigate()

    const emailReg = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig


    const emailCheck = (value) => {
        if (!emailReg.test(value)) {
            SetEmailError(true)
        } else {
            SetEmailError(false)
            setEmailValue(value)
        }
    }
    const passCheck = (value) => {
        if (value.length >= 8) {
            SetPassError(false)
            setPassValue(value)
        } else {
            SetPassError(true)
        }
    }

    const re_pass_Check = (value) => {
        set_Re_PassValue(value)
        if (passValue === value) {
            Set_re_PassError(false)
        } else {
            Set_re_PassError(true)
        }
    }

    const handleSubmit = () => {
        if (window.sessionStorage.getItem('email') === emailValue && passValue && re_pass_value) {
            Swal.fire({
                titleText: 'Account Already Exist'
            })
            return
        } else {
            if (emailReg.test(emailValue) && passValue && passValue === re_pass_value) {
                toast.success('Sign Up Success', {
                    autoClose: 2000,
                    onClose: () => navigate('/signin')
                })
                window.sessionStorage.setItem('email', emailValue)
                window.sessionStorage.setItem('pass', passValue)

            }
            else if (passValue !== re_pass_value && re_pass_value) {
                Swal.fire({
                    titleText: 'Password Does Not Match'
                })
            }
            else if (!emailValue || !passValue || !re_pass_value) {
                Swal.fire({
                    titleText: 'Please Fill Out All Fields'
                })

            }
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
                        Sign Up to your account
                    </h2>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form action="#" onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    onBlur={() => SetEmailError(false)}
                                    onChange={(e) => emailCheck(e.target.value)}
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                                />
                            </div>
                            <p className={emailError ? "text-red-600  mt-3 rounded-md " : 'hidden'}> Please enter a valid email</p>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password1" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password1"
                                    name="password"
                                    type="password"
                                    onChange={(e) => passCheck(e.target.value)}
                                    onBlur={() => SetPassError(false)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                                />
                                <p className={passError ? "text-red-600  mt-3 rounded-md " : 'hidden'}> password must be at least 8 character</p>
                            </div>
                            <div className="flex items-center justify-between mt-5">
                                <label htmlFor="password2" className="block text-sm/6 font-medium text-gray-900">
                                    Re-Type Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password2"
                                    name="password"
                                    type="password"
                                    onBlur={() => Set_re_PassError(false)}
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-orange-500 sm:text-sm/6"
                                    onChange={(e) => re_pass_Check(e.target.value)}
                                />
                                <p className={re_passError ? "text-red-600  mt-3 rounded-md " : 'hidden'}> Password Must be Match</p>

                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="flex w-full justify-center rounded-md bg-orange-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign Up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
