import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Logout = () => {

    var navigate = useNavigate()

    return (
        <>
            {navigate("/login")}
        </>
    )
}
