import React, {useEffect, useContext, useState} from 'react'
import { Link, useParams } from 'react-router-dom';
import RecordsContext from '../../context/RecordsContext';
import Authentication from '../../context/Authentication';
import Loading from "../../components/Loading";
import TopHeading from '../../components/TopHeading';

const ApprovePage = () => {
    const { user } = Authentication()
    const {
        formValues,
        onChange,
        errors,
        setErrors,
        getPending,
        openModal,
        closeModal,
        clearFormValues,
        towns,
        getTowns,
        tags,
        checkKeyDown,
        handleKeyDown,
        removeTag,
        setFormValues,
        approveRecord,
        loading,
        o_options,
        handleKeyClick,
    } = useContext(RecordsContext);
    let { id } = useParams();
    
    useEffect(() => {
        getPending(id);
        setErrors({});
        getTowns();
    }, []);

    //file upload function
    const [imagedata, setImageData] = useState("");

    const handleFileChange = files => {
        setImageData(files[0]);
        setFormValues({ ...formValues, imagedata: files[0]});
    };

    
    const handleOptions = (e) => {
        handleKeyClick(e.target.value); 
    };

  return (
    <div className='pb-28'>
        <TopHeading linkTo={'/dashboard/pending-records'} title={'Pending Records'} subtitle={'Approve'} id={formValues['business_name']}/>

        {
        loading ? 
        <Loading></Loading> : 
        <form className="w-4/5 mx-auto mt-12 h-fit" onSubmit={approveRecord}  onKeyDown={(e) => checkKeyDown(e)} encType="multipart/form-data">
            <div className='flex justify-between'>
                <h5 className='text-2xl font-semibold'>Verify Record</h5>
                {/* <button onClick={openModal} className="h-fit text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Archive</button> */}
                {/* <Link to={`/dashboard/records/${id}/archive`} className="h-fit text-white bg-red-500 hover:bg-red-400 font-medium rounded-md text-sm px-5 py-2.5 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Delete</Link> */}
            </div>

            {/* banner image of the record */}
                {formValues['cover_image'] === ""? 
                <div className='mt-10 relative z-2'>
                    <div className="rounded-t-lg h-80 w-full bg-gradient-to-r from-neutral-500 to-zinc-400"></div>
                    <h5 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 text-white text-3xl font-medium'>No Image Uploaded</h5>
                    </div>
                    :
                <div className='mt-10 relative z-2'>
                    <img src={"http://localhost:8000/" + formValues['cover_image']} alt={formValues['cover_image']} className="rounded-t-lg h-80 w-full object-cover"/>
                    <h5 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-2 text-white text-3xl font-medium'>{formValues['business_name']}</h5>
                </div>
                }
          
            <div className="create overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-b-lg p-6 bg-white space-y-6 ">
                <h5 className='font-medium text-xl mb-8'>Basic Information</h5>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Business Name</label>
                    <input type="text" name="business_name" id="business_name" placeholder="" value={formValues["business_name"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                     {errors?.business_name && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.business_name[0]}</span></div>)}
                </div>
                <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>                    
                    <textarea type="text" name='description' id="description" rows="4" value={formValues["description"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 min-h-max" placeholder="Business Description"></textarea>
                     {errors?.description && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.description[0]}</span></div>)}
                </div>
                <div className=''>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Specialties</label>
                      {/* <input type="text" name="specialties" id="specialties" placeholder="" value={formValues["specialties"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                      {errors?.specialties && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.specialties[0]}</span></div>)} */}
                      <div className='border border-gray-300 p-1 rounded-md w-full flex items-center flex-wrap gap-2'>
                                {
                                    tags.map((tag, index) => (
                                        <div className='flex items-center gap-2 p-1.5 bg-gray-300 rounded-sm'  key={index}>
                                        <span className='text-sm'>{tag}</span>
                                        <svg onClick={() => removeTag(index)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 cursor-pointer">
                                            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                                        </svg>
                                    </div> 
                                    ))
                                }
                                {/* <input type="text" className='' name='specialties' id='specialties' value={tags_joined} onChange={onChange}/> */}
                                <input onKeyDown={handleKeyDown} className="border-collapse outline-0 text-sm grow p-1.5" type="text" placeholder='Type the food name and press enter'/>
                      </div>
                    {errors?.specialties && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.specialties[0]}</span></div>)}
                  </div>
                  
                <div className='flex justify-between gap-6'>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Type</label>
                      {/* <input type="text" name="category" id="category" placeholder="" value={formValues["category"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input> */}
                        <select id="type" name="type" type="text" value={formValues["type"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option defaultValue>Select Type</option>
                            <option value="Authentic">Authentic</option>
                            <option value="Modern">Modern</option>
                        </select>
                      {errors?.type && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.type[0]}</span></div>)}
                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                      {/* <input type="text" name="category" id="category" placeholder="" value={formValues["category"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input> */}
                        <select id="category" name="category" type="text" value={formValues["category"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option defaultValue>Select Category</option>
                            <option value="Exotic">Exotic</option>
                            <option value="Pastry">Pastry</option>
                            <option value="Traditional">Traditional</option>
                        </select>
                      {errors?.category && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.category[0]}</span></div>)}
                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Price Range</label>
                        <select id="price_range" name="price_range" type="text" value={formValues["price_range"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                            <option defaultValue>Select Range</option>
                            <option value="0">₱ 0 - ₱ 0</option>
                            <option value="100">₱ 0 - ₱ 100</option>
                            <option value="200">₱ 0 - ₱ 200</option>
                            <option value="300">₱ 0 - ₱ 300</option>
                            <option value="400">₱ 0 - ₱ 400</option>
                            <option value="500">₱ 0 - ₱ 500</option>
                            <option value="1000">₱ 0 - ₱ 1000</option>
                        </select>
                      {errors?.price_range && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.price_range[0]}</span></div>)}
                  </div>
                </div>

                <div className='flex gap-20'>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Operating Hours</label>
                        <div className='flex gap-3 items-center w-full'>
                            {/* <input className='border w-full border-gray-300 py-2 px-4 rounded-md text-sm' type="time" id="hours_from" name="time" onChange={handleFrom}></input>  
                            <p>to</p> 
                            <input className='border w-full border-gray-300 py-2 px-4 rounded-md text-sm' type="time" id="hours_to" name="time" onChange={handleTo}></input>      */}
                            <input className='border w-full border-gray-300 py-2 px-4 rounded-md text-sm' type="time" id="operating_from" name="operating_from" value={formValues["operating_from"]} onChange={onChange}></input>  
                            <p>to</p> 
                            <input className='border w-full border-gray-300 py-2 px-4 rounded-md text-sm' type="time" id="operating_to" name="operating_to" value={formValues["operating_to"]} onChange={onChange}></input>     
                        </div>
                        {errors?.hours_from && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.hours_from[0]}</span></div>)}

                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Days Open</label>
                        <div className='flex gap-3 items-center'>
                            <select id="open_from" name="open_from" type="text" value={formValues["open_from"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option defaultValue>Select From</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>                            
                            <p>to</p> 
                            <select id="open_to" name="open_to" type="text" value={formValues["open_to"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
                                <option defaultValue>Select From</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Thursday">Thursday</option>
                                <option value="Friday">Friday</option>
                                <option value="Saturday">Saturday</option>
                                <option value="Sunday">Sunday</option>
                            </select>                        
                            </div>
                            {errors?.open_from && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.open_from[0]}</span></div>)}
                  </div>
                </div>
                <div className=''>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Order Options (Click all application options)</label>
                    <div className='flex gap-2'>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="flex">
                                <input type="checkbox" id="dine" value="Walk In" className="peer hidden" onClick={handleOptions} />
                                <label htmlFor="dine" className="flex items-center gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                py-2 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900"> 
                                {
                                    o_options.indexOf("Walk In") > -1 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg>:
                                    <div></div>
                                }
                                Walk In </label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="reservation" value="Reservation" className="peer hidden"  onClick={handleOptions} />
                                <label htmlFor="reservation" className="flex items-center gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                py-2 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                {
                                    o_options.indexOf("Reservation") > -1 ?
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg> :
                                    <div></div>
                                }
                                Reservation</label>
                            </div>
                            <div className="flex">
                                <input type="checkbox" id="order" className="peer hidden" value="Delivery"  onClick={handleOptions} />
                                <label htmlFor="order" className="flex items-center gap-2 select-none cursor-pointer rounded-md border border-gray-300
                                py-2 px-4  text-gray-600 bg-gray-100 transition-colors duration-200 ease-in-out peer-checked:bg-gray-200 peer-checked:text-gray-900 "> 
                                {
                                    o_options.indexOf("Delivery") > -1 ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-green-700">
                                        <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                    </svg> :
                                    <div></div>
                                }

                                 Delivery </label>
                            </div>
                        </div>
                    </div>
                     {errors?.service_options && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.service_options[0]}</span></div>)}
                </div>
                <div className='flex justify-between gap-6'>
                  <div className='w-1/2'>
                  <label className="text-sm font-medium text-gray-900 block mb-2">Date Applied</label>
                      <input readOnly type="text" name="date_applied" id="date_applied" placeholder="" value={formValues["date_applied"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                      {errors?.date_applied && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.date_applied[0]}</span></div>)}
                  </div>
                 
                </div>
                
            </div>
            <div className="create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
            <h5 className='font-medium text-xl mb-8'>Contact Information</h5>
                <div className='flex justify-between gap-6'>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                        <input type="email" name="email" id="email" placeholder="" value={formValues["email"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                        {errors?.email && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.email[0]}</span></div>)}
                    </div>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2">Social Media Link</label>
                        <input type="text" name="socials" id="socials" placeholder="" value={formValues["socials"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                        {errors?.socials && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.socials[0]}</span></div>)}
                    </div>
                </div>
                <div className='flex justify-between gap-6'>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                        <input type="text" name="phone_number_one" id="phone_number_one" placeholder="" maxLength="11" value={formValues["phone_number_one"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                        {errors?.phone_number_one && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.phone_number_one[0]}</span></div>)}
                    </div>
                    <div className='w-1/2'>
                        <label className="text-sm font-medium text-gray-900 block mb-2">Second Phone Number (Optional)</label>
                        <input type="text" name="phone_number_two" id="phone_number_two" placeholder="" maxLength="11" value={formValues["phone_number_two"]} onChange={onChange}  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                        {errors?.phone_number_two && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.phone_number_two[0]}</span></div>)}
                    </div>
                </div>
            </div>
            <div className="hidden create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
            <h5 className='font-medium text-xl mb-8'>Cover Image</h5>
              <div> 
                      {/* <div>
                        <img src={'http://localhost:8000/'+formValues['cover_image']} alt={formValues['cover_image']} className="h-52 w-full object-cover"/>
                      </div> */}
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="imagedata" className="flex flex-col items-center justify-center w-full h-fit border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100">
                              {
                                (imagedata == 0) ?  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop </p>
                                <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                            </div> :  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                  <svg aria-hidden="true" className="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                                  <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">{imagedata.name}</span> </p>
                                  <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                              </div>
                              }
                             
                              <input id="imagedata" type="file" name='imagedata' className="hidden" onChange={e => handleFileChange(e.target.files)} />
                              {errors?.imagedata && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.imagedata[0]}</span></div>)}
                          </label>
                      </div> 
                  </div>
              </div>
            <div className="create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
              <h5 className='font-medium text-xl mb-8'>Address & Location</h5>
              <div>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Town</label>
                    <select id="town" name="town" type="text" value={formValues["town"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
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
                    <label className="text-sm font-medium text-gray-900 block mb-2">Address</label>
                    <input type="text" name="address" id="address" placeholder="" value={formValues["address"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                     {errors?.address && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.address[0]}</span></div>)}
              </div>
              <div className='flex justify-between gap-6'>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Latitude</label>
                      <input type="number" name="latitude" id="latitude" placeholder="" value={formValues["latitude"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                      {errors?.latitude && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.latitude[0]}</span></div>)}
                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Longitude</label>
                      <input type="number" name="longitude" id="longitude" placeholder="" value={formValues["longitude"]} onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5  " required=""></input>
                      {errors?.longitude && (<div className='flex'><span className="text-red-400 text-sm m-2 p-2 mt-3">{errors?.longitude[0]}</span></div>)}
                  </div>
                </div>
            </div>
          
            <div className='buttons mt-6 space-x-3'>
              <button type="submit" className="h-fit text-white bg-green-600 hover:bg-green-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" >Approve</button>
              <Link to='/dashboard/pending-records' onClick={clearFormValues} className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</Link>
            </div>
        </form>
                
        }

           
        <div id='deleteModal' className="hidden absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 modal w-1/3 bg-white overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg py-12 px-4 mx-auto text-center space-y-4">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16 text-red-600 mx-auto">
                <path d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" />
                <path fillRule="evenodd" d="M3.087 9l.54 9.176A3 3 0 006.62 21h10.757a3 3 0 002.995-2.824L20.913 9H3.087zm6.133 2.845a.75.75 0 011.06 0l1.72 1.72 1.72-1.72a.75.75 0 111.06 1.06l-1.72 1.72 1.72 1.72a.75.75 0 11-1.06 1.06L12 15.685l-1.72 1.72a.75.75 0 11-1.06-1.06l1.72-1.72-1.72-1.72a.75.75 0 010-1.06z" clipRule="evenodd" />
            </svg>
            <h5 className='text-xl font-bold'>Delete Record?</h5>
            <p className='w-4/5 mx-auto text-md text-gray-600 '>Do you really want to reject this record? Rejected records are deleted permanently.</p>
            <div className='buttons flex gap-2 w-fit mx-auto'>
                <button type='submit' className="h-fit text-white bg-red-600 hover:bg-red-500 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" data-dropdown-toggle="dropdown" >Archive</button>
                <button onClick={closeModal}  className="h-fit text-gray-700 bg-white border hover:bg-gray-200 border-gray-300 font-medium rounded-md text-sm px-5 py-2 text-center mr-2 active:scale-95 transition-all ease-out duration-300" type="button" data-dropdown-toggle="dropdown" >Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default ApprovePage
