import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const Auth = createContext({});

import AppContext from './Context';

export const Authentication = ({ children }) => {
      
    const { closeLoginModal } = useContext(AppContext);
    const initialForm = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        town: "",
        role: "",
        status: ""
    }

    const [formValues, setFormValues] = useState(initialForm);
    const [userFormValues, setUserFormValues] = useState(initialForm);

    const onChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };

    const onUserChange = (e) => {
      const { name, value } = e.target;
      setUserFormValues({ ...userFormValues, [name]: value });
    };

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [spinner, setSpinner] = useState(false);
    const [users, setUsers] = useState([]);
    const [result, setResult] = useState(null);
    const [updateResult, setUpdateResult] = useState(null);
    const [errors, setErrors] = useState([]);
    const [loginerror, setLoginError] = useState(false);

    function closeResult(){
      setTimeout(() => {
        setResult(null);
      }, 5000)
    }

    function closeResultFast(){
        setResult(null);
    }

    function closeUpdateResult(){
      setTimeout(() => {
        setUpdateResult(null);
      }, 5000)
    }

    function closeUpdateResultFast(){
      setUpdateResult(null);
    }

    const navigate = useNavigate();

    const csrf = () => axios.get("/sanctum/csrf-cookie");
    
    const getUser = async () => {
      const {data} = await axios.get('/api/user');
      setUser(data);
      setUserFormValues({
        name: data.name,
        email: data.email,
        town: data.town,
        role: data.role
      });
    };

    const getUsers = async () => {
        setLoading(true);
        const apiRecords = await axios.get("api/usergroup");
        setUsers(apiRecords.data.data);
        setLoading(false);
    };

    const createUser = async (e) => {
      e.preventDefault();
      // console.log(formValues);
      setErrors([]);
      setResult(null)
      try {
        const response = await axios.post("api/data/create-user", formValues);
        await getUsers();
        setFormValues(initialForm);
        navigate("dashboard/admin-records");
        setResult(response.status);
        closeResult();
      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
    }

    const login = async ({ email, password}) => {
      await csrf();
      setLoginError(false);
      setErrors([]);
      setSpinner(true);
      // document.getElementById('login').disabled = true;
      // document.getElementById('login').innerText = "Signing in...";
      try {
        await axios.post('/login',  {email, password} );
        await getUser();
        navigate("/dashboard");
        setLoginError(false);
      } catch(e) {
        if (e.response.status === 422){
          setErrors(e.response.data.errors);
        }
        else{
          setLoginError(true);
        }
      }
      setSpinner(false);
      // document.getElementById('login').disabled = false;
      // document.getElementById('login').innerText = "Sign in";
    };

    const guestLogin = async ({ email, password}) => {
      await csrf();
      setLoginError(false);
      setErrors([]);
      setSpinner(true);
      try {
        await axios.post('/login',  {email, password} );
        await getUser();
        setLoginError(false);
        closeLoginModal();
      } catch(e) {
        if (e.response.status === 422){
          setErrors(e.response.data.errors);
        }
        else{
          setLoginError(true);
        }
      }
      setSpinner(false);
    };

    const register = async ({ name, email, password, password_confirmation, town, role }) => {
      // console.log({ name, email, password, password_confirmation, town, role });
      await csrf();
      setSpinner(true);
      setErrors([]);
      try {
        const response = await axios.post('/register', {name, email, password, password_confirmation, town, role});
        navigate("/register-verification");
        console.log(response.status);
      } catch(e) {
        if (e.response.status === 422){
          setErrors(e.response.data.errors);
        }
      }
      setSpinner(false);
    };
    
    const clearFormValues = () => {
      setUserFormValues({...userFormValues, name: user.name});
      setUserFormValues({...userFormValues, email: user.email});
    }

    const updateUser = async (e) => {
      e.preventDefault();
      setErrors([]);
      setUpdateResult(null)
      try {
        const response = await axios.put("api/data/update-user/" + user.id, userFormValues);
        await getUser();
        navigate("dashboard/admin-profile");
        setUpdateResult(response.status);
        closeUpdateResult();
      } catch (e) {
        if (e.response.status === 422) {
          setErrors(e.response.data.errors);
        }
      }
    }

    const logout = () => {
      axios.post("/logout").then(() => {
        setUser(null);
      });
    };

    const logoutGuest = () => {
      axios.post("/logout").then(() => {
        setUser(null);
      });
    };

    //try transfering to login
    // useEffect(() => {
    //   if (!user) {
    //     getUser();
    //   }
    // }, []);


    return <Auth.Provider value = {{ 
      user, 
      logoutGuest,
      errors, 
      getUsers,
      guestLogin,
      users,
      getUser, 
      login, 
      register, 
      logout, 
      csrf,
      result,
      closeResultFast,
      onChange,
      formValues,
      createUser,
      setErrors,
      loading,
      loginerror,
      updateUser,
      clearFormValues,
      onUserChange,
      updateResult,
      setUpdateResult,
      closeUpdateResultFast,
      setLoginError,
      spinner,
      setSpinner
      }}>
      {children}
    </Auth.Provider>

}

export default function useAuthContext() {
      return useContext(Auth);
}
