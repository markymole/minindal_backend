import React, {useState, useEffect, useContext, useRef,} from 'react'
import { Link } from 'react-router-dom';
import Authentication from '../context/Authentication';
import RecordsContext from '../context/RecordsContext';
import TopHeading from '../components/TopHeading';

export function Dashboard(){
    const { user, users, getUser, getUsers } = Authentication()
    const {  getTowns, loading, towns, records, reviews, pendingRecords, archives, getArchives, getRecords, getPendings, getReviews} = useContext(RecordsContext);
    
    useEffect(()=>{
        getRecords();
        getPendings();
        getArchives();
        getTowns();
        getUsers();
        getReviews();
    },[])


    const [suggest, setSuggest] = useState([]);
    const [specialties, setSpecialties] = useState([]);

    const countSub = users.filter((user) => {
        return user.role.toLowerCase() === 'sub admin';
    }).length;

    useEffect(() =>{
            handleSuggest(records);
    }, [records]);

      const handleSuggest = (value) =>{
        value.map((record) => {
          let lowered = record.specialties.toLowerCase();
          setSuggest(suggest => [...suggest, lowered.split(',')]);
        });
    }

    useEffect(() => {
        handleSpecialties(suggest);
    },[suggest]);
    
    const handleSpecialties = (value) => {
        const unique = [...new Set(value.flat())];
        setSpecialties(unique);
    };
    
  return (
    <div className='min-h-screen max-h-full'>
    <TopHeading linkTo={'/dashboard'} title={'Dashboard'} subtitle={'Overview'} id={''}/>

    <div className="w-4/5 mx-auto mt-12 h-fit">
            <h5 className='text-2xl font-semibold'>Dashboard</h5>
            <div className='mt-10 flex gap-4 '>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6 flex gap-4 items-center w-1/2'>
                    <div className='h-10 w-10 px-3.5 py-1.5 bg-gray-900 text-white text-xl rounded-full'>
                        <span>{user?.name[0]}</span>
                    </div>
                    <div className='mt-20'>
                        <h5 className='font-medium text-xl -mt-6'>Welcome, {user?.name}</h5>
                        <p className='text-sm font-medium text-gray-600'>{user?.role}</p>
                        {/* <Link><p className='text-sm text-gray-600'>Edit Profile</p></Link> */}
                    </div>
                </div>
                <div className='overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y w-1/2 text-center'>
                    <h5 className='font-bold text-xl italic'>Minindal: A Kapampangan Food Directory Hub</h5>
                    <p className='text-sm text-gray-600'>Center for Kapampangan Studies</p>
                </div>
            </div>
            <div className='mt-8'>
       
                <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="flex items-start rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-green-100 bg-green-50">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                        </svg> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                    </div>

                    <div className="ml-4">
                        <h2 className="font-semibold">
                          Total Active Records</h2>
                        <p className="mt-2 text-base text-gray-500">{
                            records?
                            <span>{records.length}</span>
                            :
                            <span>0 </span>
                        } </p>
                    </div>
                    </div>

                    <div className="flex items-start rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg> */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                    </div>

                    <div className="ml-4">
                        <h2 className="font-semibold">Total Pending Records</h2>
                        <p className="mt-2 text-base text-gray-500">{
                            pendingRecords?
                            <span>{pendingRecords.length} </span>
                            :
                            <span>0 </span>
                        } </p>
                    </div>
                    </div>
                    <div className="flex items-start rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                    </div>

                    <div className="ml-4">
                        <h2 className="font-semibold">Total Archived Records</h2>
                        <p className="mt-2 text-base text-gray-500">{
                                archives?
                                <span>{archives.length} </span>
                                :
                                <span>0 </span>
                        
                            }</p>
                    </div>
                    </div>
                    <div className="flex items-start rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-100 bg-indigo-50">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-blue-400">
                            <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                            <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                        </svg>

                    </div>

                    <div className="ml-4">
                        <h2 className="font-semibold">Total Admins</h2>
                        <p className="mt-2 text-base text-gray-500">{users.length}</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="2xl:container mt-8">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                    <div className="md:col-span-2 lg:col-span-1" >
                        <div className="py-4 px-6 space-y-4 rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                            <div>
                                <div className="mt-2 flex justify-center gap-4">
                                    <h3 className="text-4xl font-bold text-gray-700">{specialties.length}</h3>
                                    <div className="flex items-end gap-1 text-green-500">
                                        <svg className="w-3" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6.00001 0L12 8H-3.05176e-05L6.00001 0Z" fill="currentColor"/>
                                        </svg>
                                        <span>{records?.length}</span>
                                    </div>
                                </div>
                                <span className="block text-sm text-center text-gray-500">Kapampangan Cuisine Specialties</span>
                            </div>
                            <div className="w-full text-sm text-gray-600 h-[20vh] overflow-y-scroll">
                                <div className=''>
                                    {
                                        specialties.map((special, i) => {
                                            return(
                                            <div className='flex justify-between px-1' key={i}>
                                                <p className="py-1 font-base">{special}</p>
                                                <p className="text-gray-500 font-semibold mr-6">
                                                 {
                                                    records.filter((record) => {
                                                        return record.specialties.toLowerCase().includes(special);
                                                    }).length
                                                }</p>
                                              
                                            </div>
                                            )
                                        })
                                    }
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div>
                        <div className="h-full py-6 px-6 rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                            <div className="">
                                <h1 className="text-4xl font-bold text-gray-800">{records?.length}</h1>
                                <span className="text-gray-500 text-sm ">Total Active Records</span>
                            </div>
                            <svg className="w-full" viewBox="0 0 218 69" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 67.5C27.8998 67.5 24.6002 15 52.5 15C80.3998 15 77.1002 29 105 29C132.9 29 128.6 52 156.5 52C184.4 52 189.127 63.8158 217.027 63.8158" stroke="url(#paint0_linear_622:13664)" strokeWidth="3" strokeLinecap="round"/>
                                <path d="M0 67.5C27.2601 67.5 30.7399 31 58 31C85.2601 31 80.7399 2 108 2C135.26 2 134.74 43 162 43C189.26 43 190.74 63.665 218 63.665" stroke="url(#paint1_linear_622:13664)" strokeWidth="3" strokeLinecap="round"/>
                                <defs>
                                <linearGradient id="paint0_linear_622:13664" x1="217.027" y1="1" x2="7.91244" y2="15" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#4DFFDF"/>
                                <stop offset="1" stopColor="#4DA1FF"/>
                                </linearGradient>
                                <linearGradient id="paint1_linear_622:13664" x1="218" y1="18.3748" x2="5.4362" y2="18.9795" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#54E346"/>
                                <stop offset="1" stopColor="#1C7947"/>
                                </linearGradient>
                                </defs>
                            </svg>
                            <table className="mt-4 text-sm -mb-2 w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-500">
                                                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                            </svg>
                                            Authentic Cuisines</td>
                                        
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.type === "Authentic";
                                            }).length}</td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 flex items-center gap-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-blue-500">
                                                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                                            </svg>

                                            Modern Cuisines</td>
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.type === "Modern";
                                            }).length}</td>
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                    </div>
                    <div>
                    <div className="h-full py-6 px-6 rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                            <div className="">
                                <h1 className="text-4xl font-bold text-gray-800">{records?.length}</h1>
                                <span className="text-gray-500 text-sm ">Total Active Records</span>
                            </div>
                            <table className="mt-4 text-sm -mb-2 w-full text-gray-600">
                                <tbody>
                                    <tr>
                                        <td className="py-1 font-semibold">Traditional</td>
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.category === "Traditional";
                                            }).length}</td>
                                        <td>  
                                                <div className="flex items-center">
                                                    <span className="">{
                                                        Math.floor((records.filter((record) => {
                                                            return record.category === "Traditional";
                                                        }).length / records.length) * 100)
                                                    }%</span>
                                                </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 font-semibold">Pastries</td>
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.category === "Pastries";
                                            }).length}</td>
                                           <td>  
                                                <div className="flex items-center">
                                                    <span className="">{
                                                        Math.floor((records.filter((record) => {
                                                            return record.category === "Pastries";
                                                        }).length / records.length) * 100)
                                                    }%</span>
                                                </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 font-semibold">Deserts</td>
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.category === "Deserts";
                                            }).length}</td>
                                           <td>  
                                                <div className="flex items-center">
                                                    <span className="">{
                                                        Math.floor((records.filter((record) => {
                                                            return record.category === "Deserts";
                                                        }).length / records.length) * 100)
                                                    }%</span>
                                                </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="py-1 font-semibold">Exotic</td>
                                        <td className="text-gray-500">  {
                                            records.filter((record) => {
                                                return record.category === "Exotic";
                                            }).length}</td>
                                        <td>  
                                                <div className="flex items-center">
                                                    <span className="">{
                                                        Math.floor((records.filter((record) => {
                                                            return record.category === "Exotic";
                                                        }).length / records.length) * 100)
                                                    }%</span>
                                                </div>
                                        </td>   
                                    </tr>
                                </tbody>
                            </table>   
                        </div>
                    </div>
                </div>
            </div>
            {
                user.role == "Super Admin" &&

            <div id='towns' className='mt-8 grid grid-cols-2 gap-4'>
           
                    <div className="rounded-xl  bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                        <div className="rounded-t mb-0 px-0 border-0">
                        <div className="flex flex-wrap items-center px-4 py-2">
                            <div className="relative w-full max-w-full flex-grow flex-1">
                            <h3 className="font-semibold text-base text-gray-900 ">Town Records</h3>
                            </div>
                            <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                <p className='p-2'>{towns.length}</p>
                            </div>
                        </div>
                        {
                                loading? 
                                <div className="text-center p-6 border-t">
                                <div role="status">
                                    <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            </div> 
                            :
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                <th className="px-4 bg-gray-100  text-gray-600  align-middle border border-solid border-gray-200  py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Town</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Active</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Pending</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Archives</th>
                                {/* <th className="px-4 bg-gray-100  text-gray-500  align-middle border border-solid border-gray-200  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {
                                towns.map((town) => {
                                    return(
                                            <tr className="text-gray-600 hover:bg-gray-100 transition-all ease-out duration-100" key={town.id}>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3 text-left">{town.town}</th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3">
                                            {
                                            records.filter((record) => {
                                                return record.town === town.town;
                                            }).length}</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-3">{
                                            pendingRecords.filter((pending) => {
                                                return pending.town === town.town;
                                            }).length}</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-3">
                                            {
                                            archives.filter((archive) => {
                                                return archive.town === town.town;
                                            }).length}
                                            </td>
                                      
                                            </tr>
                                    );
                                })
                            }
                            </tbody>
                            </table>
                        </div>
                        }
                        </div>
                    </div>
                    <div className="rounded-xl  bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                        <div className="rounded-t mb-0 px-0 border-0">
                        <div className="relative flex flex-col min-w-0 break-words bg-gray-50  w-full rounded">
                            <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 ">Recent Activities</h3>
                                </div>
                                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                                <button className="invisible bg-blue-500  text-white active:bg-blue-600 text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">See all</button>
                                </div>
                            </div>
                            <div className="block w-full bg-white">
                                <div className="px-4 flex justify-between bg-gray-100  text-gray-500  align-middle border border-solid border-gray-200  py-3 text-sm border-l-0 border-r-0 whitespace-nowrap text-left">
                                <p className='font-semibold uppercase text-xs'> Pending Records</p>
                                            <Link to='/dashboard/pending-records/' className="flex items-center hover:underline font-medium text-blue-500 hover:text-blue-600" >
                                                See All<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                            </Link>                                
                                </div>
                                <ul className="">
                                {
                                    pendingRecords.slice(0,2).map((pending) => {
                                        return(
                                            <li className="flex px-4 hover:bg-gray-100 cursor-default" key={pending.id}>
                                                <div className="w-9 h-9 rounded-full flex-shrink-0 bg-amber-500 my-2 mr-3">
                                                <svg className="w-9 h-9 fill-current text-red-50" viewBox="0 0 36 36"><path d="M25 24H11a1 1 0 01-1-1v-5h2v4h12v-4h2v5a1 1 0 01-1 1zM14 13h8v2h-8z"></path></svg>
                                                </div>
                                                <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600  py-2">
                                                <div className="flex-grow flex justify-between items-center">
                                                    <div className="self-center">
                                                    <a className="font-medium text-gray-800 " href="#0">{pending.business_name} - </a> {pending.description} <span className="font-medium text-gray-800 hover:text-gray-900">{pending.town}</span>
                                                    </div>
                                                    <div className="flex-shrink-0 ml-2">
                                                    <Link to={`/dashboard/pending-records/${pending.id}/approve`} className="flex items-center font-medium text-blue-500 hover:text-blue-600" >
                                                        View<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                                    </Link>
                                                    </div>
                                                </div>
                                                </div>
                                        </li>
                                        )
                                    })
                                }

                              
                                </ul>
                                <div className="px-4 flex justify-between bg-gray-100  text-gray-500  align-middle border border-solid border-gray-200  py-3 text-sm border-l-0 border-r-0 whitespace-nowrap text-left">
                                <p className='font-semibold uppercase text-xs'> Reviews</p>
                                            <Link to='/dashboard/reviews/' className="flex items-center hover:underline font-medium text-blue-500 hover:text-blue-600" >
                                                See All<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                            </Link>                                
                                </div>
                                <ul className="">
                                    {
                                         reviews?.slice(0,2).map((review) => {
                                            return(
                                                <li className="flex px-4 cursor-default hover:bg-gray-100" key={review.id}>
                                                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                                                    <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z"></path></svg>
                                                    </div>
                                                    <div className="flex-grow flex items-center border-b border-gray-100  text-sm text-gray-600  py-2">
                                                    <div className="flex-grow flex justify-between items-center">
                                                        <div className="self-center">
                                                        <a className="font-medium text-gray-800 hover:text-gray-900  " href="#0">{review.author}</a> reviewed <a className="font-medium text-gray-800" href="#0">{review.business_name}</a> with a rating of {review.star_rating}
                                                        </div>
                                                     
                                                    </div>
                                                    </div>
                                                </li>
                                            )
                                        })
                                    }
                              
                                </ul>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
            </div>
            }
            {
                user.role == "Super Admin" &&
            
            <div className='mt-8 pb-10'>
                <div className="flex items-start rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg space-y">
                <div className='w-1/2'>
                        <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 ">User's List</h3>
                                </div>
                                <Link to='/dashboard/users-records/' className="flex text-sm items-center hover:underline py-2 font-medium text-blue-500 hover:text-blue-600" >
                                                See All<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                </Link>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                <th className="px-4 bg-gray-100  text-gray-600  align-middle border border-solid border-gray-200  py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Email</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Role</th>
                                {/* <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Archives</th> */}
                                {/* <th className="px-4 bg-gray-100  text-gray-500  align-middle border border-solid border-gray-200  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {
                                 users.filter((user) => {
                                    return user.role.toLowerCase() === 'user';
                                }).slice(0,5).map((user) => {
                                    return(
                                            <tr className="text-gray-600 hover:bg-gray-100 transition-all ease-out duration-100" key={user.id}>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3 text-left">{user.name}</th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3">
                                            {
                                                user.email
                                            }</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-3">{
                                                user.role
                                            }</td>
                                            </tr>
                                    );
                                })
                            }
                            </tbody>
                            </table>
                        </div>                    
                    </div>
                    <div className='w-1/2 border-l'>
                        <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1">
                                <h3 className="font-semibold text-base text-gray-900 ">Admin's List</h3>
                                </div>
                                <Link to='/dashboard/admin-records/' className="flex text-sm items-center hover:underline py-2 font-medium text-blue-500 hover:text-blue-600" >
                                                See All<span><svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg></span>
                                </Link>
                        </div>
                        <div className="block w-full overflow-x-auto">
                            <table className="items-center w-full bg-transparent border-collapse">
                            <thead>
                                <tr>
                                <th className="px-4 bg-gray-100  text-gray-600  align-middle border border-solid border-gray-200  py-3 text-sm  border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Name</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Email</th>
                                <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Role</th>
                                {/* <th className="px-4 bg-gray-100  text-gray-600 align-middle border border-solid border-gray-200  py-3 text-sm   border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Archives</th> */}
                                {/* <th className="px-4 bg-gray-100  text-gray-500  align-middle border border-solid border-gray-200  py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left min-w-140-px"></th> */}
                                </tr>
                            </thead>
                            <tbody>
                            {
                                 users.filter((user) => {
                                    return user.role.toLowerCase() !== 'user';
                                }).slice(0,5).map((user) => {
                                    return(
                                            <tr className="text-gray-600 hover:bg-gray-100 transition-all ease-out duration-100" key={user.id}>
                                            <th className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3 text-left">{user.name}</th>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-3">
                                            {
                                                user.email
                                            }</td>
                                            <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-sm  whitespace-nowrap p-3">{
                                                user.role
                                            }</td>
                                            </tr>
                                    );
                                })
                            }
                            </tbody>
                            </table>
                        </div>                    
                    </div>
         
    
                </div>
            </div>
            }

      </div>
    </div>
  )
}

export default Dashboard
