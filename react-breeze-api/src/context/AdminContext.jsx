import React, {createContext, useContext, useEffect, useState} from 'react';
import axios from '../api/axios';
import { useNavigate } from "react-router-dom";

const AdminContext = createContext({});

export const AdminProvider = ({ children }) => {

    function deleteAdmin() {
        console.log('hello');
        // await axios.delete("api/data/records/" + id);
        // getRecords();
      };
    

    const openModal = () => {
        const modalEl = document.getElementById("deleteModal");
          modalEl.classList.remove('hidden');
          var backdropEl = document.createElement('div');
          backdropEl.setAttribute('modal-backdrop', '');
          backdropEl.classList.add('bg-zinc-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-20');
          document.querySelector('body').append(backdropEl);
      };
  
      const closeModal = () => {
          const modalEl = document.getElementById("deleteModal");
  
        //   backdropEl.classList.remove('bg-gray-900', 'bg-opacity-50', 'dark:bg-opacity-80', 'fixed', 'inset-0', 'z-20');
          modalEl.classList.add('hidden');
          modalEl.setAttribute('aria-hidden', 'true');
          modalEl.removeAttribute('aria-modal');
          modalEl.removeAttribute('role');
          document.querySelector('[modal-backdrop]').remove();
        
      };

      const [showLogin, setShowLogin] = useState(false);

      function openLogin(){
          setShowLogin(!showLogin);
          console.log('clicked!');
      }


    return <AdminContext.Provider value = {{ 
        deleteAdmin,
        openModal,
        closeModal,
        showLogin,
        openLogin
      }}>
      {children}
    </AdminContext.Provider>

};

export default AdminContext;
