import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication'

const GuestLayout = () => {
  const { user } = useAuthContext();
  return !user ? <Outlet></Outlet>: <Navigate to="/dashboard"/>;
  
};

export default GuestLayout;