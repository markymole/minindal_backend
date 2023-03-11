import React, { useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import Authentication from '../context/Authentication';
import RecordsContext from '../context/RecordsContext';
import { useNavigate } from "react-router-dom";


const UserPost = ({users, loading}) => {

    const initialForm = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        town: "",
        role: "",
        status: "1"
    }

    const initialForm2 = {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
        town: "",
        role: "",
        status: "0"
    }

    const [formValues, setFormValues] = useState(initialForm);
    const [formValues2, setFormValues2] = useState(initialForm2);

    const { openModal, unblockModal, closeunblockModal, closeModal} = useContext(RecordsContext);
    const { getUsers } = Authentication();

    useEffect(() => {
        getUsers();
      }, []);

    const [delName, setDelName] = useState('');
    const [delID, setDelID] = useState('');
    const [result, setResult] = useState(null);
    const [result2, setResult2] = useState(null);

    const navigate = useNavigate();
    function closeResult(){
        setTimeout(() => {
          setResult(null);
        }, 5000)
      }
    
      function closeResult2(){
        setTimeout(() => {
          setResult2(null);
        }, 5000)
      }
  
      function closeResultFast(){
          setResult(null);
      }

      function closeResultFast2(){
        setResult(null);
    }
      
    const handleClickUnblock = (id, name) => {
        setDelName(name);
        setDelID(id);
        unblockModal();
    }

  
    const handleClickDelete = (id, name) => {
        setDelName(name);
        setDelID(id);
        openModal();
    }

    const handleDelete = async (e, id) => {
        e.preventDefault();
        const response = await axios.put("api/usergroup/" + id, formValues);
        if(response.data.status === 200){
            getUsers();
            navigate("/dashboard/admin-records");
            setResult(true);
            closeModal();
            closeResult();
        }
      };

      const handleUnblock = async (e, id) => {
        e.preventDefault();
        const response = await axios.put("api/usergroup/" + id, formValues2);
        if(response.data.status === 200){
            getUsers();
            navigate("/dashboard/admin-records");
            setResult2(true);
            closeunblockModal();
            closeResult2();
        }
      };

    if(loading){
        return (
         <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
         <thead className="">
             <tr>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden">#</th>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Admin Name</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Verified</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Town Origin</th>
                 <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>
                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                     <span className="sr-only">Actions</span>
                 </th>
             </tr>
         </thead>
         <tbody className="animate-pulse divide-y divide-gray-200 bg-white ">
                     {[...Array(10)].map((e, i) =>
                        <tr key={i}>
                            <td className="py-3 pl-3 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 opacity-60 hidden">{e}</td>                        
                            <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                            <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                            <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                            <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                            <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                            <td className="px-3 py-3 text-sm w-fit">
                                <div className='flex gap-1 w-fit ml-8 -mr-8'>
                                        <div className='flex gap-1 font-medium p-2  w-fit rounded-lg text-amber-300 items-center group'>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                            </svg>
                                            <p>Edit</p>
                                        </div> 
                                </div>
                            </td>
                        </tr>
                     )}
         </tbody>
     </table>
 
        )
 
     }

  return (
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg">
                    {/* <h5>search</h5> */}
                    {result && (   
                        <div className='bg-white rounded-lg py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center absolute top-16 right-12 mt-2 transition-all ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span>Admin Record Blocked</span>
                        <button className='ml-20' onClick={closeResultFast}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    )}
                    {result2 && (   
                        <div className='bg-white rounded-lg py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center absolute top-16 right-12 mt-2 transition-all ease-in-out'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                        </svg>
                        <span>Admin Record Unblocked!</span>
                        <button className='ml-20' onClick={closeResultFast2}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                    )}
                  <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600">
                      <thead className="">
                          <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden">#</th>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Name</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Verified</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Town Origin</th>
                              <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Role</th>    
                              <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>                                              
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                  <span className="sr-only">Actions</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white ">
                        {users.map((user) => {
                           return(
                                <tr key={user.id}>
                                    <td className="py-3 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 hidden">{user.id}</td>
                                    <td className="px-3 py-2  sm:pl-6  text-sm ">{user.name}</td>
                                    <td className="px-3 py-2 text-sm">
                                        {user.email}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {user.email_verified_at ?
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                         </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
                                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                </svg>    
                                        }
                                    </td>
                                    <td className="px-3 py-2 text-sm truncate ...">
                                        {user.town}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {user.role}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {
                                            user.status == 0 ? <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                             </svg> : <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-red-500">
                                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                    </svg>

                                            // user.status == 0 ? 
                                            //     <p className='bg-green-100 text-green-900 text-center p-1 rounded-sm text-sm'>Active</p>
                                            // : 
                                            //     <p className='bg-red-100 text-red-900 text-center p-1 rounded-sm text-sm'>Inactive</p>

                                          
                                        }

                                    </td>
                                    <td className="px-3 py-2 text-sm w-fit">
                                        <div className='flex gap-1 w-fit ml-8 -mr-8'>
                                            {/* <Link to='' className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-amber-500 items-center group'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                                </svg>
                                                <p>Edit</p>
                                            </Link> */}
                                            {
                                                user.status == 0 ? 
                                                <button onClick={() => handleClickDelete(user.id, user.name)} className='flex gap-2 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-red-500 items-center group'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 bg-red-500 rounded-full">
                                                    <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                                                    </svg>
                                                    <p>Block</p>
                                                </button>
                                                :
                                                <button onClick={() => handleClickUnblock(user.id, user.name)} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-amber-500 items-center group'>
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                    </svg>
                                                    <p>Unblock</p>
                                                </button>
                                                
                                            }
                                           
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                      </tbody>
                  </table>  
                <hr />
                <div id='deleteModal' className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-1/3 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-12 px-4 mx-auto text-center space-y-4">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-16 h-16 bg-red-500 rounded-full mx-auto">
                        <path fillRule="evenodd" d="M6.72 5.66l11.62 11.62A8.25 8.25 0 006.72 5.66zm10.56 12.68L5.66 6.72a8.25 8.25 0 0011.62 11.62zM5.105 5.106c3.807-3.808 9.98-3.808 13.788 0 3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788z" clipRule="evenodd" />
                    </svg>
                    <h5 className='text-xl font-bold'>Remove {delName} access?</h5>
                    <p className='w-4/5 mx-auto text-md text-gray-600 '>Blocked users will not be able to access the dashboard anymore, but their record information will remain.</p>
                    <div className='buttons flex gap-2 w-fit mx-auto'>
                        <button type='button' className="h-fit text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" onClick={(e) => handleDelete(e, delID)}>Block</button>
                        <button onClick={closeModal}  className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</button>
                    </div>
                </div>
                <div id='unblockModal' className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-1/3 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-12 px-4 mx-auto text-center space-y-4">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-green-600">
                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                    </svg> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 mx-auto text-amber-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 01-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 01-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 01-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584zM12 18a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                    </svg>

                    <h5 className='text-xl font-bold'>Unblock {delName} access?</h5>
                    <p className='w-4/5 mx-auto text-md text-gray-600 '>Unblocking this record will permit the user to access the records again.</p>
                    <div className='buttons flex gap-2 w-fit mx-auto'>
                        <button type='button' className="h-fit text-white bg-amber-600 hover:bg-amber-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" onClick={(e) => handleUnblock(e, delID)}>Unblock</button>
                        <button onClick={closeunblockModal}  className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</button>
                    </div>
                </div>
              </div>
  )
}

export default UserPost