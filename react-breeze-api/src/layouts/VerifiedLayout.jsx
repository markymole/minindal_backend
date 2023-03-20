import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication'

const VerifiedLayout = () => {
  const { user } = useAuthContext();
  if( user ) {
    return user.email_verified_at == null ? <Navigate to="/403"/> : <Outlet/>; 
  }
  else{
    return <Outlet/>
  }

};

export default VerifiedLayout;