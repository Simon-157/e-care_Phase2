import { useAuth } from "../hooks/useAuth";
import { Outlet, Navigate} from 'react-router-dom'

function ProtectedLayout() {
  const {user} = useAuth()
  console.log(user)

  return ( 
    <>{user ? <Outlet/>:<Navigate to="/" />}</>
  )
}

export default ProtectedLayout