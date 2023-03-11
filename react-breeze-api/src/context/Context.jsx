import React, {useContext, useState, useEffect} from 'react'
import { createContext } from 'react'
import useAuthContext from './Authentication';

const AppContext = createContext();

export const Context = ({ children }) => {

    const { setLoginError } = useAuthContext();
    const [ loginShow, setLoginShow ] = useState(false);

    const openLoginModal = () => {
        setLoginShow(!loginShow);
    };

    const closeLoginModal = () => {
        setLoginShow(!loginShow);
        setLoginError(false);
    };

    return <AppContext.Provider value={{
        loginShow,
        openLoginModal,
        closeLoginModal
      }}>{children}</AppContext.Provider>
}

export default AppContext
