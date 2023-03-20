import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
import { Link } from 'react-router-dom';
import FadeInOut from '../animation/fade';

const ContactPage = () => {
  const form = useRef();
  const [result, setResult] = useState();
  const [spinner, setSpinner] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSpinner(true);

      emailjs.sendForm(
        'service_pcy4wpg', 
        'template_tvzq9tk', 
        form.current, 
        '3_Etw7854PxjEsdY8')

        .then((result) => {
            setResult(true);
            setSpinner(false);
        }, (error) => {
            setResult(false);
            setSpinner(false);
        });
    setSpinner(false);
    closeResult();
  };

  return (
    <div className=''>
       <div>
          <div className="flex w-full pt-4 lg:pt-12 justify-center items-center bg-gradient-to-l from-green-50/30 to-white"> 
          {result && (   
                 <FadeInOut show={result} duration={75}>
                  <div className='bg-white rounded-lg z-20 py-6 px-4 w-4/5 md:w-1/2 lg:w-1/4 lg:px-10 lg:py-10 font-medium text-sm shadow-lg shadow-gray-300 items-center fixed top-1/2 right-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  mt-2 transition-all ease-in-out'>
                     <div className='flex gap-3 items-center text-green-500'>
                        <span className='text-base'>Message Sent</span>
                         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500 -rotate-45">
                           <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                         </svg>
                     </div>
                     <p className='mt-3'>Your feedback has been sent. We'll get back to you shortly. Thank you!</p>
                     <Link to='/'>
                       <p className='w-full bg-green-500 py-1.5 text-base rounded-md mt-3 text-center active:scale-95 transition-all duration-75 ease-out text-white'>Ok</p>
                     </Link>
                 </div>
                 </FadeInOut>
          )}

          

                  
            {/* CONTAINER OF CONTACT US */}
            <div className="space-y-6 bg-white w-full md:max-w-2xl max-w-4xl p-5 md:p-8 lg:px-12 md:rounded-xl md:shadow-2xl text-slate-900">
              <FadeInOut show={true} duration={200}>

              <div className="">
                {/* <h1 className="font-bold text-2xl lg:text-4xl pb-3 ">Contact Us</h1> */}
                <h1 className="mb-4 text-4xl font-extrabold  leading-none tracking-normal text-gray-900 md:text-4xl lg:text-5xl md:tracking-tight">
                            <span>Contact us:</span> <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-cyan-500 lg:inline">Minindal</span> <span>is listening.</span>
                </h1>
                <p className="text-[15px] lg:text-lg">Got any question or feedback? write a message!</p>
              </div>
              </FadeInOut>
              <FadeInOut show={true} duration={500}>
              <div>
                <form ref={form} onSubmit={sendEmail}  className="space-y-8 pt-2">
                <div >
                    <label className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email" id="user_email" name='user_email' className=" block w-full p-2 lg:p-2.5 shadow-sm bg-white border border-gray-300 text-gray-900 text-sm md:text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="name@example.com" required></input>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                    <input type="text" id="user_name" name='user_name' className="block p-2 lg:p-2.5 w-full text-sm md:text-base text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"  required></input>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm md:text-base font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea id="message" name='message' rows="6" className="block p-2 lg:p-2.5 w-full text-sm md:text-base text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Write your message here..."></textarea>
                </div>
                {/* <input type="submit" value="Send" className=" cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300" /> */}
                <button type="submit" className="py-2.5 md:py-2.5 px-5 md:px-6 text-sm md:text-base font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300">
                    {
                          spinner ? <div role="status">
                          <svg aria-hidden="true" className="w-5 h-5 lg:w-6 lg:h-6 mr-2 text-gray-200 animate-spin dark:text-gray-300 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span className="sr-only">Loading...</span>
                      </div>: <span className="inline-block">Send</span>

                      }
                </button>
              </form>
          
              </div>
              </FadeInOut>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactPage
