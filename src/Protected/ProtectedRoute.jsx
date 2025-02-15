import React, { useContext } from 'react'
import { AuthContext } from '../Providers/AuthProvider'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { HashLoader } from 'react-spinners'

const ProtectedRoute = ({children}) => {
  const { user, Loading } = useContext(AuthContext)
  const navigate = useNavigate();
  const location = useLocation();
  
  if (Loading == true) {
    return  <div className="flex justify-center items-center">
              <HashLoader></HashLoader>
            </div>
  }

  if (user) {
    return children
  }
  return <Navigate state={location.pathname} to={"/login"}></Navigate>

}

export default ProtectedRoute