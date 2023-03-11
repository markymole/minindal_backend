import React, {createContext, useState, useEffect} from 'react'
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";
import useAuthContext from './Authentication';

const MapsContext = createContext();

export const MapsProvider = ({children}) => {
  
    return <MapsContext.Provider value={{
  
    }}>{children}</MapsContext.Provider>
};

export default MapsContext;