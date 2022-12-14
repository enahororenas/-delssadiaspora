import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAppContext } from '../context/appContext'

const ProtectedRoute = ({children}) => {
    //console.log('USE',useAppContext())
    const {user} = useAppContext()
    if (!user){ return <Navigate to='/'></Navigate>}
    return (children)
}

export default ProtectedRoute