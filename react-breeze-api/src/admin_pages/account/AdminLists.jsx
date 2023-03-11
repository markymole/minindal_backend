import React, {useState, useEffect, useContext, useRef} from 'react'
import { Link } from 'react-router-dom';
import RecordsContext from '../../context/RecordsContext';
import Authentication from '../../context/Authentication';
import FadeInOut from '../../animation/fade';
import UserPost from '../../components/UserPost';
import { Pagination } from '../../components/Pagination';
import TopHeading from '../../components/TopHeading';

const AdminLists = () => {

        //api fetch
        const { user, users, getUsers, closeResultFast, result} = Authentication()
        const {  getTowns, towns, setLoading, setErrors, loading } = useContext(RecordsContext);
        useEffect(() => {
            setLoading(true);
            getUsers();
            getTowns();
            setErrors({});
        }, [])

    const [ filteredResults, setFilteredResults ] = useState([]);
    const [ searchInput, setSearchInput ] = useState('');
    const [ isFiltered, setIsFiltered ] = useState(false);
    // const [ subCount, setSubCount ] = useState(0);

    //counters
    const countSub = users.filter((user) => {
        return user.role.toLowerCase() === 'sub admin';
    }).length;

    const countAdmins = users.filter((user) => {
        return user.role.toLowerCase() !== 'user';
    }).length;

    const adminUsers = users.filter((user) => {
        return user.role.toLowerCase() !== 'user';
    })
    
    //paginate filter
    const filterItems = (filterValue) => {;
        setSearchInput(filterValue);
        if (filterValue !== '') {
            const filteredData = adminUsers.filter((adminUsers) => {
                return Object.values(adminUsers).join('').toLowerCase().includes(filterValue.toLowerCase())
                })
                setFilteredResults(filteredData);
                setIsFiltered(true);
        }
        else{
            setFilteredResults(adminUsers)
            setIsFiltered(false);
          }
      }
      
      const clearSearch = () => {
          filterItems('');   
          setFilteredResults(adminUsers)
      }

        const clearFilter = () => {
            
        }

    //paginate
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);
  
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentFilteredPosts = filteredResults.slice(indexOfFirstPost, indexOfLastPost);
    const currentPosts = adminUsers.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='min-h-screen max-h-full'>
        <TopHeading linkTo={'/dashboard/admin-records'} title={'Admin'} subtitle={'List'} id={''}/>
        {result && (   
            <div className='bg-white rounded-lg py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed right-12 mt-2 transition-all ease-in-out'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
            <span>Admin User Created</span>
            <button className='ml-20' onClick={closeResultFast}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>
        )}
        <div className="w-4/5 mx-auto mt-12 h-fit">
            <div className='flex justify-between'>
                <h5 className='text-2xl font-semibold'>Admin Records</h5>
                <Link to='/dashboard/admin-records/create' className="h-fit text-white bg-green-500 hover:bg-green-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >New Admin</Link>
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
                            <h2 className="font-semibold">Total Administrators</h2>
                            <p className="mt-2 text-xl text-gray-500">{countAdmins}</p>
                            
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
                            <h2 className="font-semibold">Total Sub Administrators</h2>
                            <p className="mt-2 text-sm text-gray-500">{countSub}</p>
                        </div>
                    </div>
                   
                </div>
                </div>
            </div>
          <div className="buttons-filter mt-8">
            <div className='flex justify-between items-center'>
                <div className="record-filters flex items-center space-x-4">
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
                <UserPost users={isFiltered ? currentFilteredPosts : currentPosts} loading={loading}/>
                <Pagination postsPerPage={postsPerPage} totalPosts={isFiltered? filteredResults.length : adminUsers.length} paginate={paginate} currentP={currentPage} loading={loading} indexOfFirstPost={indexOfFirstPost} indexOfLastPost={indexOfLastPost}/>
          </div>   
      </div>
  
    </div>

  )
}

export default AdminLists
