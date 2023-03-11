import React from 'react'

const Loading = () => {
  return (
    <div className='pb-28'>
        {/* <div className="text-center">
            <div role="status">
                <svg aria-hidden="true" className="inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                <span className="sr-only">Loading...</span>
            </div>
        </div> */}
      <form className="w-4/5 mx-auto mt-12 h-fit">
          <div className='flex justify-between'>
              <h5 className='text-2xl font-semibold'></h5>
          </div>
          <div className='mt-10 relative z-2'>
              <div className="animate-pulse rounded-t-lg h-80 w-full bg-gradient-to-r from-neutral-300 to-zinc-300"></div>
          </div>
          <div className="create overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-b-lg p-6 bg-white space-y-6 ">
              <h5 className='font-medium text-xl mb-8'>Basic Information</h5>
              <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2">Business Name</label>
                  <input type="text" name="business_name" id="business_name" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
              </div>
              <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2">Description</label>                    
                  <textarea type="text" name='description' id="description" rows="4" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" placeholder=""></textarea>
              </div>
              <div className='flex justify-between gap-6'>
                <div className='w-1/2'>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                    <select id="category" name="category" type="text" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" disabled required>
                          <option defaultValue>Select Category</option>
                          <option value="Exotic">Exotic</option>
                          <option value="Delicacy">Delicacy</option>
                          <option value="Sweets">Sweets</option>
                      </select>                      
                </div>
                <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Specialties</label>
                      
                      <div className='h-10 animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'>
                              
                      </div>
                </div>
              </div>
              <div className='flex justify-between gap-6'>
                <div className='w-1/2'>
                <label className="text-sm font-medium text-gray-900 block mb-2">Date Applied</label>
                    <input readOnly type="text" name="date_applied" id="date_applied" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                </div>
                <div className='w-1/2'>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Date Approved</label>
                    <input readOnly type="text" name="date_approved" id="date_approved" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                </div>
              </div>
              
          </div>
          <div className="create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
          <h5 className='font-medium text-xl mb-8'>Contact Information</h5>
              <div className='flex justify-between gap-6'>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Email Address</label>
                      <input type="email" name="email" id="email" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Social Media Link</label>
                      <input type="text" name="socials" id="socials" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                  </div>
              </div>
              <div className='flex justify-between gap-6'>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Phone Number</label>
                      <input type="text" name="phone_number_one" id="phone_number_one" placeholder="" maxLength="11" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                  </div>
                  <div className='w-1/2'>
                      <label className="text-sm font-medium text-gray-900 block mb-2">Second Phone Number (Optional)</label>
                      <input type="text" name="phone_number_two" id="phone_number_two" placeholder="" maxLength="11" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                  </div>
              </div>
          </div>
          <div className="create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
          <h5 className='font-medium text-xl mb-8'>Cover Image</h5>
            <div> 
                    <div className="flex items-center justify-center w-full">
                      <label htmlFor="imagedata" className="animate-pulse bg-neutral-300 h-32 flex flex-col items-center justify-center w-full border-2 border-neutral-400 border-dashed rounded-lg cursor-pointerdark:hover:bg-bray-800">
                      
                        </label>
                    </div> 
                </div>
            </div>
          <div className="create mt-6 overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg p-6 bg-white space-y-6">
            <h5 className='font-medium text-xl mb-8'>Address & Location</h5>
            <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2">Town</label>
                  <div className='animate-pulse h-10 bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5'></div>
            </div>
            <div>
                  <label className="text-sm font-medium text-gray-900 block mb-2">Address</label>
                  <input type="text" name="address" id="address" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
            </div>
            <div className='flex justify-between gap-6'>
                <div className='w-1/2'>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Latitude</label>
                    <input type="number" name="latitude" id="latitude" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                </div>
                <div className='w-1/2'>
                    <label className="text-sm font-medium text-gray-900 block mb-2">Longitude</label>
                    <input type="number" name="longitude" id="longitude" placeholder="" className="animate-pulse bg-neutral-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5" required=""></input>
                </div>
              </div>
          </div>
        
     
      </form>
  </div>
  )
}

export default Loading
