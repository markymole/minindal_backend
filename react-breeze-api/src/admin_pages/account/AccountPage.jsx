import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import useAuthContext from '../../context/Authentication';
import TopHeading from '../../components/TopHeading';

export function AccountPage (){
    //register acount
    const [disabled , setDisabled] = useState(true) 

    // const [role, setRole] = useState("");
    const {user, onUserChange, updateUser, clearFormValues, updateResult, closeUpdateResultFast } = useAuthContext();

  function toggle_edit(){
    setDisabled(false);
  }

  function closeEdit(){
    setDisabled(true);
    clearFormValues();
  }
  
  return (
    <div className='min-h-screen max-h-full'>
        <TopHeading linkTo={'/dashboard/admin-profile'} title={'Admin'} subtitle={'Information'} id={''}/>
        {updateResult && (   
            <div className='bg-white rounded-lg py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Record Updated</span>
            <button className='ml-20' onClick={closeUpdateResultFast}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        )}
        <div className=''>
            <form onSubmit={updateUser} className='w-4/5 mx-auto mt-12 h-fit'>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg py-5 px-6 bg-white space-y-6 '>
                    <p className='text-lg font-medium flex items-center gap-3'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                        Admin's Profile Setting</p>
                </div>
            <div className="create overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-b-lg p-6 bg-white space-y-6 ">
                <div>
                        <div className='h-fit w-10 px-3.5 py-1.5 bg-gray-900 text-white text-xl'>
                            <span>{user?.name[0]}</span>
                        </div>     
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2" id="to_toggle">Name</label>
                        {
                            disabled ? 
                            <input type="text" name="name" id="name" value={user.name} disabled placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>
                            : 
                            <input type="text" name="name" id="name" defaultValue={user.name} onChange={onUserChange} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>
                        }


                    </div>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2" id="to_toggle">Email</label>
                        {
                            disabled ?
                            <input type="email" name="email" id="email" value={user.email} disabled placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>
                            : 
                            <input type="email" name="email" id="email" defaultValue={user.email} onChange={onUserChange} placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>

                        }
                    </div>
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2">Role</label>
                        <input type="text" name="role" id="role" defaultValue={user.role} disabled placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>
                    </div>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2" id='to_toggle'>Town</label>
                        <input type="text" name="town" id="town" defaultValue={user.town} disabled placeholder="" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"></input>
                    </div>
                </div>
                {
                    disabled ? 
                    <button className="h-fit w-36 text-gray-700 bg-white border hover:bg-green-500 hover:text-white hover:border-green-500 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" onClick={toggle_edit}>Edit</button>
                    : 
                    <div>
                           <button type='submit' className="h-fit text-white bg-green-600 hover:bg-green-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" >Save</button>
                           <button onClick={closeEdit}  className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</button>
                    </div>
                 
                }
                
            </div>
            </form>
        </div>
    </div>
  )
}

export default AccountPage
