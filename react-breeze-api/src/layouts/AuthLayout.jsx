import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication'

const GuestLayout = () => {
  const { user } = useAuthContext();
  if( user ) {
    return user.role != 'User' ? <Outlet/> : <Navigate to="/403"/>; 
  }
  else{
    return <Navigate to="/login" />
  }

};

export default GuestLayout;