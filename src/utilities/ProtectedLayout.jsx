import { useAuth } from "../hooks/useAuth";
import { Outlet} from 'react-router'

function ProtectedLayout() {
  const {user} = useAuth()

  return ( 
    user && <Outlet/> 
  )
}

export default ProtectedLayout