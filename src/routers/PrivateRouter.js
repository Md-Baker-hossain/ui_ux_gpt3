import React, { Children, useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvier'

const PrivateRouter = ({children}) => {

    const {user} = useContext(AuthContext);  

    if(!user){
        return <Navigate to="/loging"></Navigate>
    }

  return (
     children
  )
}

export default PrivateRouter