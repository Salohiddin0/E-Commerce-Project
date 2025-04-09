import { Navigate } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks'

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useAppSelector(state => state.auth)

  if (!isAuthenticated) {
    // Redirect to login if not authenticated
    return <Navigate to='/login' replace />
  }

  return children
}

export default PrivateRoute
