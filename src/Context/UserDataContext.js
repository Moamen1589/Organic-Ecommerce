import React, { createContext, useState, useEffect } from 'react'
export const UserContext = createContext()



function UserDataContext({ children }) {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [userName, setUserName] = useState()

    const addUserName = (user) => {
        setUserName(user)
    }
    const addEmail = (email) => {
        setEmail(email)
    }

    const addPassword = (pass) => {
        setPassword(pass)
    }


    useEffect(() => {
        if (window.sessionStorage.getItem('email') && window.sessionStorage.getItem('pass')) {
            addEmail(window.sessionStorage.getItem('email'))
            console.log(window.sessionStorage.getItem('email'))
            addPassword(window.sessionStorage.getItem('pass'))
        }
    }, [])
    return (
        <UserContext.Provider value={{ addEmail, addPassword,addUserName, email, password,userName }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserDataContext