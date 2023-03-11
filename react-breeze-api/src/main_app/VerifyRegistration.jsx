import React, {useState} from 'react'
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import useAuthContext from '../context/Authentication';
import Logo from '../assets/cks-logo.png';

export function VerifyRegistration () {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState([]);
  const [status, setStatus] = useState(null);
  const { csrf } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await csrf();
    setErrors([]);
    setStatus(null);
    try {
      const response = await axios.post("/forgot-password", { email });
      setStatus(response.data.status);
    } catch (e) {
      if (e.response.status === 422) {
        setErrors(e.response.data.errors);
      }
    }
  };
  return (
    <div>        
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-lg">
                {/* <img src={Logo} alt="Center for Kapampangan Studies" className='mx-auto w-28 mb-3' />
                <h1 className="font-bold text-center text-2xl mb-5">Center for Kapampangan Studies</h1>    */}
                <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">

                    <form onSubmit={handleSubmit}>
                    <div className="px-5 py-7">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 mb-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                        </svg> */}

                        <h2 className='font-bold text-start text-lg'>Email Verification</h2>
                        {status && (
                        <div className="bg-cyan-500 px-5 py-3 my-3 rounded text-white flex gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>

                        {status}
                        </div>
                        )}
                        <div className="text-md text-start mt-2">
                        Please check your email, we've sent you a Verification link.
                        </div>
                        {/* <label className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                        <input type="email" placeholder='test@example.com' value={email} onChange={(e) => setEmail(e.target.value)} className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        {errors.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 -mt-3">{errors.email[0]}</span></div>)}
                        <button type="submit" className="transition duration-300 bg-gradient-to-r from-green-700 to-green-500 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block active:scale-95">
                            <span className="inline-block mr-2">Submit</span>
                        </button> */}
                    </div>
                    </form>
                </div>
                <div className="py-5">
                
            </div>
            </div>
        </div>
    </div>
  )
}

export default VerifyRegistration
