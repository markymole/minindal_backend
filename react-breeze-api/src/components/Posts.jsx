import React, { useContext, useEffect, useState} from 'react'
import { Link } from 'react-router-dom';
import RecordsContext from '../context/RecordsContext';

export const Posts = ({records, loading, status}) => {
    const { closeModal, openModal, deletePending} = useContext(RecordsContext);

    if(loading){
       return (
        <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
        <thead className="">
            <tr>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden">#</th>
                <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Business Name</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Description</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Business Address</th>
                <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Town</th>
                <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Food Category</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Specialty</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Latitude</th>
                <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Longitude</th>
                <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                    <span className="sr-only">Actions</span>
                </th>
            </tr>
        </thead>
        <tbody className="animate-pulse divide-y divide-gray-200 bg-white ">
                    {[...Array(10)].map((x, i) =>
                        <tr key={i}>
                        <td className="py-3 pl-3 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 opacity-60 hidden">{i + 1}</td>
                        <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                        <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                        <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                        <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                        <td className="px-3 py-2 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                        <td className="px-3 py-3 text-sm w-fit">
                            <div className='flex gap-1 w-fit ml-8 -mr-8'>
                                {
                                    status == "Active" ?  <div className='flex gap-1 font-medium p-2  w-fit rounded-lg text-amber-300 items-center group'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                        <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                    </svg>
                                    <p>Edit</p>
                                    </div> 
                                : 
                                    <div className='flex gap-1 font-medium p-2  w-fit rounded-lg text-amber-300 items-center group'>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                            <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                        </svg>
                                        <p>Unarchive</p>
                                    </div>
                                }
                               

                                
                            </div>
                        </td>
                    </tr>
                    )}
        </tbody>
    </table>

       )

    }
  return (
    // <div>
    //     <ul className='mb-4'>
    //         {records.map(record => (
    //             <li key={record.id} className="">{record.business_name}</li>
    //         ))}
    //     </ul>

    // </div>
    
    <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg">
                    {/* <h5>search</h5> */}
                  <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600">
                      <thead className="">
                          <tr>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6 hidden">#</th>
                              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Business Name</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Description</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Address</th>
                              <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Town</th>
                              <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Type</th>
                              <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Specialty</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Latitude</th>
                              <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Longitude</th>                          
                              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                  <span className="sr-only">Actions</span>
                              </th>
                          </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white ">
                        {records.map((record) => {
                           return(
                                <tr key={record.id}>
                                    <td className="py-3 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6 hidden">{record.id}</td>
                                    <td className="px-3 py-2  sm:pl-6  text-sm ">{record.business_name}</td>
                                    <td className="px-3 py-2 text-sm hidden">
                                        {record.description}
                                    </td>
                                    <td className="px-3 py-2 text-sm hidden">
                                        {record.address}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {record.town}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {record.type}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {record.category}
                                    </td>
                                    <td className="px-3 py-2 text-sm">
                                        {record.specialties}
                                    </td>
                                    <td className="px-3 py-2 text-sm hidden">
                                        {record.latitude}
                                    </td>
                                    <td className="px-3 py-2 text-sm hidden">
                                        {record.longitude}
                                    </td>
                                    <td className="px-3 py-2 text-sm w-fit">
                                        <div className='flex gap-1 w-fit'>
                                            
                                            {
                                                status == "Active" ?  <Link to={`/dashboard/records/${record.id}/edit`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-amber-500 items-center group'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                    <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                                </svg>
                                                <p>Edit</p>
                                            </Link> : null
                                            }
                                            {
                                                status == "Archive" ?   <Link to={`/dashboard/archived-records/${record.id}/unarchive`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-amber-500 items-center group'>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                    <path d="M11.47 1.72a.75.75 0 011.06 0l3 3a.75.75 0 01-1.06 1.06l-1.72-1.72V7.5h-1.5V4.06L9.53 5.78a.75.75 0 01-1.06-1.06l3-3zM11.25 7.5V15a.75.75 0 001.5 0V7.5h3.75a3 3 0 013 3v9a3 3 0 01-3 3h-9a3 3 0 01-3-3v-9a3 3 0 013-3h3.75z" />
                                                </svg>
                                                <p>Unarchive</p>
                                            </Link> : null
                                            }
                                             {
                                                status == "Pending" ?  
                                                <div className='flex items-center gap-1'>
                                                    <Link to={`/dashboard/pending-records/${record.id}/approve`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-green-500 items-center group'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                                                        </svg>
                                                        <p>Approve</p>
                                                    </Link>
                                                    <Link to={`/dashboard/pending-records/${record.id}/reject`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-red-500 items-center group'>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                                                            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                                        </svg>
                                                        <p>Reject</p>
                                                    </Link>
                                                </div>
                                                 : null
                                            }

                                           
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}

                    
                      </tbody>
                  </table>  
                <hr />
              
              </div>
              

  )
}
