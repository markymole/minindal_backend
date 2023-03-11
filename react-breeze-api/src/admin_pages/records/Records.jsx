import React, {useState, useEffect, useContext, useRef} from 'react'
import { Link } from 'react-router-dom';
import Authentication from '../../context/Authentication';
import RecordsContext from '../../context/RecordsContext';
import FadeInOut from "../../animation/fade";
import { Posts } from '../../components/Posts';
import { Pagination } from '../../components/Pagination';
import TopHeading from '../../components/TopHeading';


const Records = () => {
    const dropdownRef1 = useRef();
    const dropdownRef2 = useRef();
    const dropdownRef3 = useRef();
    const [menu, setMenu] = useState(false);
    const [shown, setShown] = useState(false);
    const [shown2, setShown2] = useState(false);
    const [shown3, setShown3] = useState(false);

    const [ status, setStatus ] = useState('');

    // const [isOpen, setModal] = useState(false);

        //api fetch
        const { user, getUser} = Authentication()
        const { records, getRecords, setRecords, getTowns, towns, setErrors, errors, result, closeTownFast, townResult, closeResultFast, updateResult, closeUpdateResultFast, loading, setLoading, archiveResult, closeArchivedFast, openModal, closeModal, storeTown, onChangeTown, townFormValues} = useContext(RecordsContext);
        useEffect(() => {
            getRecords(); 
            getTowns();
            setLoading(true);
            setErrors({});
            setStatus('Active');
            // if(user.role == "Super Admin") {
                
            // }else{
            //     let town = user.town;
            //     const filtered = records.filter((records) => {
            //         return Object.values(records).join('').toLowerCase().includes(town.toLowerCase())
            //         })
            //     setRecords(filtered);
            // }
        }, [])

    const openMenu = () => {
        setMenu(!menu);
    }

    const handleFilter = (e) => {
        if(shown){
            dropdownRef1.current.classList.add('hidden');
            setShown(false);
        }
        else{
            dropdownRef1.current.classList.remove('hidden');
            setShown(true);
        }
    };

    const handleFilter2 = (e) => {
        if(shown2){
            dropdownRef2.current.classList.add('hidden');
            setShown2(false);
        }
        else{
            dropdownRef2.current.classList.remove('hidden');
            setShown2(true);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", () => {
            setShown(false);
            setShown2(false);
            setShown3(false);
        });
    });

    // useEffect(() => {
    //     let handler = (event) => {
    //         if(!dropdownRef1.current.contains(event.target)) {
    //             setShown(false);
    //             setShown2(false);
    //             setShown3(false);
    //         }
    //     }

    //     document.addEventListener("mousedown", handler);

    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     }
    // }, []);

    //filter
    const [ filteredResults, setFilteredResults ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');
    const [ isFiltered, setIsFiltered ] = useState(false);

    const [townFilter, setTownFilter] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');


    //paginate filter
    const filterItems = (filterValue) => {;
        setSearchInput(filterValue);
        // console.log(filterValue);
        if (filterValue !== '') {
            const filteredData = records.filter((records) => {
                return Object.values(records).join('').toLowerCase().includes(filterValue.toLowerCase())
                })
                setFilteredResults(filteredData);
                setIsFiltered(true);
        }
        else{
            setFilteredResults(records)
            setIsFiltered(false);
          }
      }
      
      const clearSearch = () => {
          filterItems('');   
          setTownFilter("");
          setCategoryFilter("");
          setFilteredResults(records)
      }

        const clearFilter = () => {
            setTownFilter("");
            setCategoryFilter("");
        }

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentFilteredPosts = filteredResults.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts = records.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='min-h-screen max-h-full'>
         <TopHeading linkTo={'/dashboard/records'} title={'Records'} subtitle={'List'} id={''}/>
        {result && (   
            <div className='bg-white rounded-lg z-20 py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Record Created</span>
            <button className='ml-20' onClick={closeResultFast}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        )}
        {updateResult && (   
            <div className='bg-white rounded-lg z-20 py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
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
         {archiveResult && (   
            <div className='bg-white rounded-lg z-20 py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Record Archived</span>
            <button className='ml-20' onClick={closeArchivedFast}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        )}
         {townResult && (   
            <div className='bg-white rounded-lg z-20 py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Town Added!</span>
            <button className='ml-20' onClick={closeTownFast}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        )}
    
        <div className="w-4/5 mx-auto mt-12 h-fit">
            <div className='flex justify-between'>
                <h5 className='text-2xl font-semibold'>Records</h5>
                <Link to='/dashboard/records/create' className="h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >New record</Link>
            </div>
           
            <div className='mt-5'>
                <div className="flex flex-col">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                    <div className="flex items-center rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 bg-blue-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-sky-500">
                                <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                            </svg>

                        </div>
                        <div className="ml-4">
                            <h2 className="font-semibold">Total Records</h2>
                            <p className="mt-2 text-xl text-gray-500">{records.length}</p>
                            
                        </div>
                    </div>

                    <div className="flex items-center rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-orange-100 bg-orange-50">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-orange-400">
                                    <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                                </svg>
                        </div>

                        <div className="ml-4">
                            <h2 className="font-semibold">Total Town</h2>
                            <p className="mt-2 text-xl text-gray-500">{towns.length}</p>
                        </div>
                    </div>
                    <div className="flex items-center rounded-xl bg-white shadow overflow-hidden ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 space-y">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-red-100 bg-red-50">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-red-400">
                                <path fillRule="evenodd" d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 18.375V5.625zM21 9.375A.375.375 0 0020.625 9h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zm0 3.75a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5a.375.375 0 00.375-.375v-1.5zM10.875 18.75a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375h7.5zM3.375 15h7.5a.375.375 0 00.375-.375v-1.5a.375.375 0 00-.375-.375h-7.5a.375.375 0 00-.375.375v1.5c0 .207.168.375.375.375zm0-3.75h7.5a.375.375 0 00.375-.375v-1.5A.375.375 0 0010.875 9h-7.5A.375.375 0 003 9.375v1.5c0 .207.168.375.375.375z" clipRule="evenodd" />
                            </svg>
                        </div>

                        <div className="ml-4">
                            <h2 className="font-semibold">Total Records</h2>
                            <p className="mt-2 text-sm text-gray-500">{records.length}</p>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
          <div className="buttons-filter mt-8">
            <div className='flex justify-between items-center'>
                <div className={ user.role == "Super Admin" ? "record-filters flex items-center space-x-4" : "record-filters flex items-center space-x-2" }>
                    <button onClick={clearSearch} className={searchInput !==  '' ? 'font-sm rounded-lg text-sm px-4 py-2.5 bg-green-500 text-white transition-all ease-in-out' : 'border font-sm rounded-lg text-sm px-4 py-2.5 bg-white text-green-600 transition-all ease-in-out'} >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.3" stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                        </svg>
                    </button>
                    {
                        user.role == "Super Admin" ? 
                        <div className="">  
                        <button onClick={handleFilter} className={townFilter == '' ? "group bg-white text-gray-700 hover:bg-gray-50 hover:text-green-700 focus:z-10 focus:border-2 focus:border-green-500 focus:text-green-600 border font-sm rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center " : "group bg-white text-green-700 hover:bg-gray-50 hover:text-green-500 focus:z-10 border-2 border-green-500 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"} type="button" data-dropdown-toggle="dropdown">{(townFilter == "" ? 'All Towns' : townFilter)}
                            {/* <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" className={shown ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'}></path>
                            </svg> */}
    
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                                <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" className={shown ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'} />
                            </svg>
    
                        </button>
                            <div ref={dropdownRef1} className="hidden font-medium bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow-xl my-4 absolute tranform transition-all ease-in-out" id="dropdown1">
                            <FadeInOut show={shown} duration={200}>
                                <ul className="py-4 px-4 " aria-labelledby="dropdown">
                                <li >
                                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100"  onClick={(e) => clearSearch()}>All Towns</a>
                                </li>
                                {
                                    loading ? <button disabled type="button" className="px-4 py-2 w-full mr-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700  inline-flex items-center">
                                    <svg role="status" className="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="#1C64F2"/>
                                    </svg>
                                    Loading...
                                    </button> : 
                                    <div>
                                         {towns.map((town) => {
                                                return(
                                                    <li key={town.id}>
                                                    <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100"  onClick={(e) => (filterItems(e.target.innerText), setTownFilter(e.target.innerText), setCategoryFilter(''))}>{town.town}</a>
                                                    </li>
                                                );
                                            })}
                                    </div>
                                }
                                     
                                <li>
                                    <button onClick={openModal} className="w-full mt-6 group text-green-900 text-sm bg-green-200 hover:bg-green-400 hover:text-white px-10 py-2 rounded-md transition-colors ease-in-out" type="button">
                                        New town
                                        </button>
                                </li>
                                </ul>
                                </FadeInOut>
                            </div>
                      
                        </div>
                        :
                        <div></div>
                    }
                   
                    <div className="">
                    <button onClick={handleFilter2} className={categoryFilter == '' ? "group bg-white text-gray-700 hover:bg-gray-50 hover:text-green-700 focus:z-10 focus:border-2 focus:border-green-500 focus:text-green-600 border font-sm rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center " : "group bg-white text-green-700 hover:bg-gray-50 hover:text-green-500 focus:z-10 border-2 border-green-500 font-medium rounded-md text-sm px-4 py-2.5 text-center inline-flex items-center"} type="button" data-dropdown-toggle="dropdown">{(categoryFilter == "" ? 'All Category' : categoryFilter)}
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-2">
                            <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" className={shown2 ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'} />
                        </svg>
                    </button>
                    <div ref={dropdownRef2} className="hidden font-medium bg-white text-base z-50 list-none divide-y divide-gray-100 rounded shadow-xl my-4 absolute tranform transition-all ease-in-out" id="dropdown2">
                    <FadeInOut show={shown2} duration={200}>
                        <ul className="py-4 px-4" aria-labelledby="dropdown">
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100 " onClick={(e) => clearSearch()}>All Category</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100 " onClick={(e) => (filterItems(e.target.innerText), setCategoryFilter(e.target.innerText), setTownFilter(''))}>Exotic</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100 " onClick={(e) => (filterItems(e.target.innerText), setCategoryFilter(e.target.innerText), setTownFilter(''))}>Delicacy</a>
                        </li>
                        <li>
                            <a href="#" className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2 rounded-md focus:bg-gray-100 " onClick={(e) => (filterItems(e.target.innerText), setCategoryFilter(e.target.innerText), setTownFilter(''))}>Sweets</a>
                        </li>
                        <li>
                                <button className="w-full mt-6 group text-green-900 text-sm bg-green-100 hover:bg-green-400 hover:text-white px-10 py-2 rounded-md transition-colors ease-in-out" type="button">
                                    New Category
                                </button>
                        </li>
                        </ul>
                        </FadeInOut>
                    </div>
                    </div>
                    <div className="">
                        
                    </div>
                </div>
                <div className="flex space-x-4">
                        {/* <!--search bar --> */}
                        <div hidden className="md:block  z-9">
                            <div className="relative flex items-center text-gray-400  z-9 focus-within:text-green-500">
                                <span className="absolute left-4 h-6 flex items-center pr-3 border-r border-gray-300">
                                <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                                </svg>
                                </span>
                                <input type="search" onChange={(e) => (filterItems(e.target.value), clearFilter())} name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full pl-14 pr-4 py-2.5 rounded-md text-sm text-gray-600 outline-none border border-gray-300 focus:border-2 focus:border-green-500 transition"></input>
                            </div>
                        </div>
                        {/* <!--/search bar --> */}
                        
                    </div>

            </div>
          </div>
          <div className="inline-block min-w-full py-2 align-middle mt-2">
                <Posts records={isFiltered ? currentFilteredPosts : currentPosts} loading={loading} status={status}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={isFiltered? filteredResults.length : records.length} paginate={paginate} currentP={currentPage} loading={loading} indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost}/>
          </div>   
          <div id='deleteModal' className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-1/4 ">
                    <div className="bg-white rounded-lg h-fit shadow">
                        <div className="flex justify-end p-2">
                            <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-toggle="authentication-modal" onClick={closeModal}>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                            </button>
                        </div>
                        <form className="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" onSubmit={storeTown}>
                            <h3 className="text-xl font-medium text-gray-900">Add New Town</h3>
                            <div>
                                <label className="text-sm font-medium text-gray-900 block mb-2">Town</label>
                                <input type="text" name="town" id="town" value={townFormValues["town"]} onChange={onChangeTown} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5" required=""></input>
                                {errors?.town && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.town[0]}</span></div>)}

                            </div>
                            <button type="submit" className="w-full text-white bg-green-500 hover:bg-green-400 focus:bg-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 mb-2 active:scale-95 transition-all ease-out ">Create Town</button>
                        
                        </form>
                    </div>
        </div>
          
      </div>
  
    </div>

  )
}

export default Records
