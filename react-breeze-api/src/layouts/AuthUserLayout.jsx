import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from '../context/Authentication'

const AuthUserLayout = () => {
  const { user } = useAuthContext();
  if(user){
    return user?.role == "User" ? <Outlet/> : <Navigate to="/redirect" />;
  }
  else{
    return <Outlet/>
  }
};

export default AuthUserLayout;