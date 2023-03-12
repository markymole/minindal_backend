import React, {useEffect, useState, useContext, useRef} from 'react'
import { Link } from 'react-router-dom';
import RecordsContext from '../context/RecordsContext';
import Posts from '../main_components/Posts';
import Map from '../main_components/Map';
import FadeInOut from '../animation/fade';
import image from '../assets/DA-7.png';

const Home = () => {

  const { records, getRecords, setRecords, getTowns, towns, loading} = useContext(RecordsContext);

  useEffect(() => {
    getTowns();
    getRecords();
  }, [])

  useEffect(() =>{
    handleSuggest(records);
  }, [records]);

  const dropdownRef1 = useRef();
  const filterRef = useRef();
  const searchRef = useRef();

  const [shown, setShown] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const [townSearch, setTownSearch] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  const [serviceFilter, setServiceFilter] = useState('');


  const [searchValue, setSearchValue] = useState('');
  const [submittedSearch, setSubmittedSearch] = useState('');


  const [filteredPost, setFiltered] = useState([]);

  const [isFiltered, setIsFiltered] = useState(false);
  const [suggestion, setSuggestion] = useState([]);
  const [suggest, setSuggest] = useState([]);

  const handleSuggest = (value) =>{
    value.map((record) => {
      let lowered = record.specialties.toLowerCase();
      setSuggest(suggest => [...suggest, lowered.split(',')]);
    });
  }

  const handleFilter = () =>{
    if(showFilter){
      filterRef.current.classList.add('hidden');
      setShowFilter(false);
    }
    else{
      filterRef.current.classList.remove('hidden');
        setShowFilter(true);
    }
  }

  const handleTypeFilter = (value) => {
    if(typeFilter == value){
      setTypeFilter('')
    }
    else{
      setTypeFilter(value);
    }
  }

  const handleCategoryFilter = (value) => {
    if(categoryFilter == value){
      setCategoryFilter('');
    }
    else{
      setCategoryFilter(value);
    }

  }

  const handlePriceFilter = (value) => {
    if(priceFilter == value){
      setPriceFilter('');
    }
    else{
      setPriceFilter(value);
    }
  }

  const handleServiceFilter = (value) => {
    if(serviceFilter == value){
      setServiceFilter('');
    }
    else{
      setServiceFilter(value);
    }
  }

  const handleTownFilter = () =>{
    if(shown){
      dropdownRef1.current.classList.add('hidden');
      setShown(false);
    }
    else{
        dropdownRef1.current.classList.remove('hidden');
        setShown(true);
    }
  }

  const [searching, setSearching] = useState(null)

  //for the data filter & search
  const handleSearch = (value) => {
    if(value != ''){
      setSearchValue(value);
      const unique = [...new Set(suggest.flat())];
      setSuggestion(unique);
      setSearching(true);
    }
    else{
      setSearchValue('');
      setSuggestion('');
      setSearching(null);
    }
  }

  const showSuggestion = () =>{
      if(searchValue == '')
      {
        setSearching(false);
        const unique = [...new Set(suggest.flat())];
        setSuggestion(unique);
      }
      else{
        setSearching(true);
      }
  }

  
  useEffect(() => {
    let handler = (event) => {
        if(!searchRef.current.contains(event.target)) {
            setSearching(null);
        }
    }

    document.addEventListener("mousedown", handler);

    return () => {
        document.removeEventListener("mousedown", handler);
    }

    
  }, []);

  const submitSearch = () =>{
    setSubmittedSearch(searchValue);
  }
  const getSuggested = (value) =>{
      setSearchValue(value);
      setSearching(null);
  }

  const filterTown = (array) => {
    if(townSearch != ''){
      return array.filter((record) => record.town == townSearch);
    }
    else{
      return array;
    }
  };

  const filterType = (array) => {
    if(typeFilter != ''){
      return array.filter((record) => record.type == typeFilter);
    }
    else{
      return array;
    }
  };

  const filterCategory = (array) => {
    if(categoryFilter != ''){
      return array.filter((record) => record.category == categoryFilter);
    }
    else{
      return array;
    }
  };

  const filterOptions = (array) => {
    if(serviceFilter != ''){
      return array.filter((record) => record.service_options.includes(serviceFilter));
    }
    else{
      return array;
    }
  };

  const searchResult = (array) => {
    if(submittedSearch != ''){
      return array.filter((record) => {
        return Object.values(record).join('').toLowerCase().includes(submittedSearch.toLowerCase())
        })
    }
    else{
      return array;
    }
  };
  
  useEffect(() => {
    if(searchValue == ''){
      setSubmittedSearch('')
    }
  }, [searchValue]);

  //instantly calls the search to update on every click simple words removes the delay
  useEffect(() => {
    let result = records;

    result = filterTown(result);
    result = filterType(result);
    result = filterCategory(result);
    result = filterOptions(result);
    result = searchResult(result);

    setFiltered(result);
  }, [townSearch, typeFilter, categoryFilter, serviceFilter, submittedSearch]);

  useEffect(() => {
    
      if(townSearch != "" || typeFilter != "" || categoryFilter != "" || serviceFilter != "" || submittedSearch != ""  )
      {
        setIsFiltered(true);
      }
      else{
        setIsFiltered(false);
      }
  }, [townSearch, typeFilter, categoryFilter, serviceFilter, submittedSearch]);


  const clearSearch = () => {
      setTownSearch('');
      setShown(false);
  }

  const closeShown = () =>{
    setShown(false);
  }

  const [toggled, setToggled] = useState(true);

  const toggleList = () => {
    setToggled(true);
  }

  const toggleMap =() => {
    setToggled(false);
  }

  return (
    // <!-- component -->
    // <div className='relative z-10'>
    // </div>
    <div className=''>
      <div className='flex flex-col'>
        <div id='filters-search' className='flex flex-col-reverse  lg:flex-row lg:justify-between lg:items-center bg-white shadow-gray-700 lg:px-4 lg:py-2'>
          <div id='filters' className=''>
              <div id='mobile' className='flex justify-between pb-2 lg:pb-0 gap-2 px-4 border-b shadow-sm lg:shadow-none lg:border-b-0'>
                <div className="w-fit lg:w-full">
                        <button onClick={(e) => (handleFilter())} className="group bg-white text-gray-700 lg:text-[15px] hover:bg-gray-50 focus:z-10 border rounded-md text-sm px-4 py-1  lg:px-4 lg:py-2 text-center inline-flex items-center justify-center w-full " type="button" data-dropdown-toggle="dropdown">
                          {
                            !showFilter ?
                            <p>Filter</p> :
                            <p>Close</p>
                          }
                        </button>
                        <div ref={filterRef} className="hidden p-4 bg-white text-base z-10 list-none divide-y divide-gray-100 rounded shadow-md my-1 absolute w-full md:w-2/3 md:left-5 lg:w-1/3 lg:left-8 left-0 tranform transition-all ease-in-out" id="dropdown2">
                        <FadeInOut show={showFilter} duration={200}>
                            <div id='type-filter' className='space-y-2'>
                                {/* <p className='text-sm'>Filter by</p> */}
                                <p className='text-sm'>Type</p>
                                <div className='text-sm grid grid-cols-3 md:grid-cols-auto gap-2'>
                                    <button className={ typeFilter == 'Authentic' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'} onClick={(e) => (handleTypeFilter(e.target.innerText))}>Authentic</button>
                                    <button className={ typeFilter == 'Modern' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'} onClick={(e) => (handleTypeFilter(e.target.innerText))}>Modern</button>
                                </div>
                                <p className='text-sm'>Category</p>
                                <hr className=''/>
                                <div className='grid grid-cols-3 md:grid-cols-auto text-sm  gap-2'>
                                    <button className={ categoryFilter == 'Traditional' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handleCategoryFilter(e.target.innerText))}>Traditional</button>
                                    <button className={ categoryFilter == 'Pastries' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'} onClick={(e) => (handleCategoryFilter(e.target.innerText))}>Pastries</button>
                                    <button className={ categoryFilter == 'Deserts' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'} onClick={(e) => (handleCategoryFilter(e.target.innerText))}>Deserts</button>
                                    <button className={ categoryFilter == 'Exotic' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'} onClick={(e) => (handleCategoryFilter(e.target.innerText))}>Exotic</button>
                                </div>
                                <p className='text-sm'>Price</p>
                                <hr className=''/>
                                <div className='grid grid-cols-3 md:grid-cols-auto text-sm gap-2 '>
                                    <button className={ priceFilter == '100' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handlePriceFilter(e.target.innerText))}>100</button>
                                    <button className={ priceFilter == '200' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handlePriceFilter(e.target.innerText))}>200</button>
                                    <button className={ priceFilter == '300' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handlePriceFilter(e.target.innerText))}>300</button>
                                    <button className={ priceFilter == '500' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handlePriceFilter(e.target.innerText))}>500</button>
                                    <button className={ priceFilter == '1000' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handlePriceFilter(e.target.innerText))}>1000</button>
                                </div>
                                <p className='text-sm'>Options</p>
                                <hr className=''/>
                                <div className='text-sm flex flex-col gap-2'>
                                    <button className={ serviceFilter == 'Walk In' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handleServiceFilter(e.target.innerText))}>Walk In</button>
                                    <button className={ serviceFilter == 'Reservation' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handleServiceFilter(e.target.innerText))}>Reservation</button>
                                    <button className={ serviceFilter == 'Delivery' ? 'bg-green-500 px-3 py-1 rounded-md text-white' :'bg-gray-200 px-3 py-1 rounded-md text-gray-900  transition-all ease-out duration-100 active:scale-95'}  onClick={(e) => (handleServiceFilter(e.target.innerText))}>Delivery</button>
                                </div>
                            </div>
                            </FadeInOut>
                        </div>
                  </div>
                  <div className="w-fit lg:w-full flex lg:hidden">
                        <button onClick={(e) => (toggleList())} className="group bg-white text-gray-700 hover:bg-gray-50 focus:z-10 border rounded-l-md text-sm px-2 py-1 lg:px-6 lg:py-2 text-center inline-flex items-center justify-center w-full lg:w-32 sm:w-28" type="button" data-dropdown-toggle="dropdown">
                          List
                        </button>         
                        <button onClick={(e) => (toggleMap())} className="group bg-white text-gray-700 hover:bg-gray-50 focus:z-10 border rounded-r-md text-sm px-2 py-1 lg:px-6 lg:py-2 text-center inline-flex items-center justify-center w-full lg:w-32 sm:w-28" type="button" data-dropdown-toggle="dropdown">
                          Map
                        </button>              
                  </div>
              </div>
          </div>
          <div id='search-bar'>
              <div className="flex items-center px-4 pb-2 pt-3 md:pt-2 space-x-2">
                  <div className="relative  bg-gray-100 p-2 lg:px-6 lg:py-2 w-full rounded-lg text-sm">
                    <div className='flex gap-2'>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 opacity-30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                      <input className="bg-gray-100 lg:text-base  outline-none w-full xl:w-96" value={searchValue} type="text" placeholder="Press search button after" onClick={showSuggestion}  onChange={(e) => (handleSearch(e.target.value))}/>
                    </div>
                      {
                        suggestion.length == 0 || searching === null?  <p></p>
                        :
                        <div  ref={searchRef}  className='absolute z-30 bg-gray-100 shadow-md lg:shadow-lg shadow-gray-300 w-full left-0 pt-2 rounded-b-md' id='dropdown'>
                           
                            <hr />
                            {
                              searching ? 
                              
                              <FadeInOut show={suggestion.length > 0} duration={200}>
                              <div className=''>
                         
                                {
                                suggestion.filter(item => {
                                  let lowered = searchValue.toLowerCase();
                                  return item.startsWith(lowered);
                                })
                                .map((suggested, i) => 
                                (
                                  <p onClick={(e) => (getSuggested(e.target.innerText))} className='px-8 py-2 text-[13px] lg:text-base hover:bg-gray-300 rounded-md text-gray-700 cursor-pointer transition-all ease-out duration-100'>{suggested}</p>
                                ))
                                }
                            </div>
                            </FadeInOut>
                            :
                              <FadeInOut show={suggestion.length > 0} duration={200}>
                              <div className='p-4 space-y-1 h-52 overflow-y-scroll scrollbar-hide'>
                                {
                                suggestion.map((suggested, i) => 
                                (
                                  <p onClick={(e) => (getSuggested(e.target.innerText))} className='px-4 py-2 text-[13px] lg:text-base hover:bg-gray-200 rounded-md text-gray-700 cursor-pointer transition-all ease-out duration-100'>{suggested}</p>
                                ))
                                }
                            </div>
                            </FadeInOut>
                            }
                           </div>
                      }
                  </div>
                  <div>
                    <div className="flex bg-gray-100 p-2 lg:px-6 lg:py-2 w-full space-x-1 rounded-lg text-sm"  onClick={handleTownFilter}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 lg:w-6 lg:h-6 opacity-30">
                          <path fillRule="evenodd" d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z" clipRule="evenodd" className={shown ? 'origin-center rotate-180 transition-all ease-in' : 'origin-center transition-all ease-in'} />
                        </svg>

                        <input className="bg-gray-100 outline-none w-1/2 xl:w-3/4 lg:text-base cursor-pointer" type="text" placeholder="" value={(townSearch == "" ? 'All' : townSearch)} readOnly/>
                    </div>
                    {/* //the dropdown for the town filter */}
                        <div ref={dropdownRef1} className="hidden font-medium bg-gray-100 text-base mt-1 z-30 list-none divide-y divide-gray-100 rounded shadow-xl absolute tranform transition-all ease-in-out" id="dropdown1">
                            <FadeInOut show={shown} duration={200}>
                                <ul className="py-4 px-4 " aria-labelledby="dropdown">
                                <li >
                                    <a href="#" className="text-sm lg:text-[15px] hover:bg-gray-100 text-gray-700 block py-2 sm:px-4 rounded-md focus:bg-gray-100"  onClick={(e) => clearSearch()}>All</a>
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
                                                    <a href="#" className="text-sm lg:text-[15px] hover:bg-gray-100 text-gray-700 block py-2 sm:px-4 rounded-md focus:bg-gray-100"  onClick={(e) => {setTownSearch(e.target.innerText); closeShown();}}>{town.town}</a>
                                                    </li>
                                                );
                                            })}
                                    </div>
                                }
                                </ul>
                                </FadeInOut>
                            </div>
                  </div>
                  <div className="bg-green-500 py-2 px-2 text-white font-base text-sm rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer" onClick={(e) => {submitSearch()}}>
                    <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    </span>
                  </div>
              </div>
          </div>
        </div>
      </div>
      <div id='content' className='lg:border-t'>
        <div id='mobile-view' className='lg:hidden h-auto '>
          { 
            toggled ? 
            <FadeInOut show={toggled} duration={200}>
            <div id='post-content' className=''>
              <p className='text-xs px-4 py-2'>Showing {isFiltered ? filteredPost.length : records.length} matching results: </p>
              <Posts records={isFiltered ? filteredPost : records} loading={loading}/>
            </div>
            </FadeInOut>
            :
            <FadeInOut show={!toggled} duration={200}>
            <div id='map' className='w-full h-[80vh] fixed right-0'>
                <Map records={isFiltered ? filteredPost : records}/>
            </div>
            </FadeInOut>
          }
        </div>
        <div id='desktop-view' className='hidden lg:flex h-auto'>
            <div id='post-content' className='w-2/4 shadow-lg bg-white fixed left-0 border-r'>
              <p className='px-6 py-2'>Showing {isFiltered ? filteredPost.length : records.length} matching results: </p>
              <Posts records={isFiltered ? filteredPost : records} loading={loading}/>
            </div>
            <div id='map' className='w-2/4 h-[83vh] fixed right-0'>
                <Map records={isFiltered ? filteredPost : records}/>
            </div>
        </div>
     
      </div>

    </div>
  )
}

export default Home