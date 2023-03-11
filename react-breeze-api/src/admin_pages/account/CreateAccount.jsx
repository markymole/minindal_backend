import React, {useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import RecordsContext from '../../context/RecordsContext';
import Authentication from '../../context/Authentication';
import FadeInOut from "../../animation/fade";

const CreateAccount = () => 
{
  
    const { user, onChange, formValues, errors, createUser, setErrors  } = Authentication()
    const { towns, getTowns } = useContext(RecordsContext);
    useEffect(() => {
        setErrors({});
        getTowns();
    }, []);
  return (
    <div className='pb-28'>
      <div className="sticky z-5 top-0 h-16 border-b bg-white  lg:py-2.5 " id='modalId'>
            <div className="px-6 flex items-center justify-between space-x-4 2xl:container ">
                    <p className='flex gap-4 align-center text-gray-500'> <Link to='/dashboard/admin-records'><span hidden className="text-md text-gray-700 font-medium lg:block">Admin</span></Link> <span className='h-6 border-r border-gray-300 -skew-x-12 '></span>  Create </p>
                    <button className="w-12 h-16 -mr-2 border-r lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 my-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="flex space-x-4">
                        {/* <!--search bar --> */}
                        <div hidden className="md:block">
                            <div className="relative flex items-center text-gray-400 focus-within:text-cyan-400">
                                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                                </span>
                                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-xl text-sm text-gray-600 outline-none border border-gray-300 focus:border-cyan-300 transition"></input>
                            </div>
                        </div>
                        {/* <!--/search bar --> */}
                        <button aria-label="search" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
                            <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 mx-auto fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                            </svg>
                        </button>
                        <button aria-label="chat" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                            </svg>
                        </button>
                        <button aria-label="notification" className="w-10 h-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 m-auto text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                            </svg>
                        </button>
                        <button className='w-10 h-10 rounded-xl group'>
                            <div className='h-10 w-10 px-3.5 py-1.5 bg-gray-900 text-white text-xl rounded-full'>
                                <span>{user?.name[0]}</span>
                            </div>                    
                        </button>
                    </div>
            </div>
        </div>
       
    
        <form className="w-2/4 mx-auto mt-12 h-fit" onSubmit={createUser}>
            <h5 className='text-2xl font-semibold'>Create Account</h5>
            <div className="create mt-10 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6 ">
                <h5 className='font-medium text-xl mb-8'>Admin Information</h5>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Name</label>
                    <input type="text" name="name" id="name" placeholder="" value={formValues["name"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                     {errors?.name && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.name[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Email</label>
                    <input type="text" name="email" id="email" placeholder="" value={formValues["email"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                     {errors?.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.email[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Password</label>
                    <input type="password" name="password" id="password" placeholder="" value={formValues["password"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                     {errors?.password && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.password[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Confirm Password</label>
                    <input type="password" name="password_confirmation" id="password_confirmation" placeholder="" value={formValues["password_confirmation"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                     {errors?.password_confirmation && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.password_confirmation[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Town Origin</label>
                    <select type="text" id="town" name="town" value={formValues["town"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                        <option defaultValue>Select City</option>
                        {towns.map((town) => {
                            return(
                                <option key={town.id} value={town.town}>{town.town}</option>
                            );
                        })}
                    </select>
                    {errors?.town && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.town[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Admin Role</label>
                    <select id="role" name="role" type="text" value={formValues["role"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                        <option defaultValue>Select Status</option>
                        {/* <option value="Master Admin">Master Admin</option> */}
                        <option value="Sub Admin">Sub Admin</option>
                    </select>                    
                    {errors?.role && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.role[0]}</span></div>)} 
                </div>
            </div>
          
            <div className='buttons mt-6 space-x-3'>
              <button type="submit" className="h-fit text-white bg-green-600 hover:bg-green-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" >Create</button>
              <Link to='/dashboard/admin-records' className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</Link>
            </div>
      </form>
  
    </div>
  )
}

export default CreateAccount
