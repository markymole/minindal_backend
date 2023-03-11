import React from 'react'
import { Link } from 'react-router-dom';

export const ArchivePosts = ({archives, loading}) => {
    if(loading){
        return (
           
         <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
         <thead className="">
             <tr>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                 <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Business Name</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Description</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Address</th>
                 <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Town</th>
                 <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Food Category</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Specialty</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Latitude</th>
                 <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Longitude</th>
             
                 {/* <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Status</th> */}
                 <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                     <span className="sr-only">Actions</span>
                 </th>
             </tr>
         </thead>
         <tbody className="animate-pulse divide-y divide-gray-200 bg-white ">
           {archives.map((archive) => {
               return(
                   <tr key={archive.id}>
                       <td className="py-3 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">{archive.id}</td>
                       <td className="px-3 py-3 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                       <td className="px-3 py-3 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                       <td className="px-3 py-3 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                       <td className="px-3 py-3 text-sm "> <p className='h-7 bg-neutral-300 rounded'></p></td>
                       <td className="px-3 py-3 text-sm "> <p className='h- bg-neutral-300 rounded'></p></td>                                    {/* <td className="py-3 text-sm font-semibold text-gray-900 sm:pl-6">{archive.id}</td> */}
                                               {/* <td className="py-3 text-sm font-semibold text-gray-900 sm:pl-6">{archive.id}</td> */}
 
                       <td className="px-3 py-3 text-sm w-fit">
                           <div className='flex gap-1 w-fit ml-8 -mr-8'>
                               <div className='flex gap-1 font-medium p-2  w-fit rounded-lg text-amber-300 items-center group'>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                       <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                   </svg>
                                   <p>Edit</p>
                               </div>
 
                               {/* <div className='flex gap-1 font-medium p-2  w-fit rounded-lg text-red-300 items-center'>
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                       <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                   </svg>
                                   <p>Archive</p>
                               </div> */}
                           </div>
                       </td>
                   </tr>
               );
           })}
 
           
         </tbody>
     </table>
 
        )
 
     }
 
   return (
     // <div>
     //     <ul className='mb-4'>
     //         {archives.map(archive => (
     //             <li key={archive.id} className="">{archive.business_name}</li>
     //         ))}
     //     </ul>
 
     // </div>
     
     <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-t-lg">
                     {/* <h5>search</h5> */}
                   <table className="min-w-full divide-y divide-gray-300 bg-white border-1/2 border-gray-600">
                       <thead className="">
                           <tr>
                               <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">#</th>
                               <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900">Business Name</th>
                               <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Description</th>
                               <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Business Address</th>
                               <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Town</th>
                               <th scope="col" className="px-1 py-3.5 text-left text-sm font-semibold text-gray-900">Food Category</th>
                               <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Specialty</th>
                               <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Latitude</th>
                               <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 hidden">Longitude</th>
                           
                               {/* <th scope="col" className="px-3 py-3.5 text-center text-sm font-semibold text-gray-900">Status</th> */}
                               <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                   <span className="sr-only">Actions</span>
                               </th>
                           </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-200 bg-white ">
                         {archives.map((archive) => {
                             return(
                                 <tr key={archive.id}>
                                 <td className="py-3 pl-4 pr-3 text-sm font-semibold text-gray-900 sm:pl-6">{archive.id}</td>
                                 <td className="px-3 py-3 text-sm ">{archive.business_name}</td>
                                 <td className="px-3 py-3 text-sm hidden">
                                     {archive.description}
                                 </td>
                                 <td className="px-3 py-3 text-sm hidden">
                                     {archive.address}
                                 </td>
                                 <td className="px-3 py-3 text-sm">
                                     {archive.town}
                                 </td>
                                 <td className="px-3 py-3 text-sm">
                                     {archive.category}
                                 </td>
                                 <td className="px-3 py-3 text-sm">
                                     {archive.specialties}
                                 </td>
                                 <td className="px-3 py-3 text-sm hidden">
                                     {archive.latitude}
                                 </td>
                                 <td className="px-3 py-3 text-sm hidden">
                                     {archive.longitude}
                                 </td>
                                 <td className="px-3 py-3 text-sm w-fit">
                                     <div className='flex gap-1 w-fit'>
                                         <Link to={`/dashboard/archived-records/${archive.id}/edit`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-amber-500 items-center group'>
                                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                 <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
                                             </svg>
                                             <p>Edit</p>
                                         </Link>
 
                                         {/* <Link to={`/dashboard/archived-records/${archive.id}/`} className='flex gap-1 font-medium p-2 hover:bg-gray-100 w-fit rounded-lg text-red-500 items-center'>
                                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                                                 <path fillRule="evenodd" d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2zm0 4.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM10 9a.75.75 0 01.75.75v2.546l.943-1.048a.75.75 0 111.114 1.004l-2.25 2.5a.75.75 0 01-1.114 0l-2.25-2.5a.75.75 0 111.114-1.004l.943 1.048V9.75A.75.75 0 0110 9z" clipRule="evenodd" />
                                             </svg>
                                             <p>Archive</p>
                                         </Link> */}
                                     </div>
                                 </td>
                                 </tr>
                             );
                         })}
 
                     
                       </tbody>
                   </table>
 
                 
                   
                 
               </div>
               
 
   )
 }
 