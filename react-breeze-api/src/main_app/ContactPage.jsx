import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'

const ContactPage = () => {
  const form = useRef();
  const [result, setResult] = useState(null);

  function closeResult(){
    setTimeout(() => {
      setResult(false);
    }, 5000)
}

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_d1opun7', 
      'template_tvzq9tk', 
      form.current, 
      '3_Etw7854PxjEsdY8')

      .then((result) => {
          console.log(result.text);
          console.log("Message sent");
          setResult(true);
      }, (error) => {
          console.log(error.text);
          console.log("Message !sent");
          setResult(false);
      });
      closeResult();
  };

  return (
    <div>
       <div>
          <div className="flex w-full min-h-screen justify-center items-center"> 
          {result && (   
                  <div className='bg-white rounded-lg z-20 py-2 px-4 w-fit font-medium text-sm shadow-md shadow-gray-300 flex gap-2 items-center fixed top-20 right-4 mt-2 transition-all ease-in-out'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                  <span>Message Sent</span>
                  <button className='ml-20'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-4 h-4'>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                  </button>
              </div>
          )}
     
            {/* CONTAINER OF CONTACT US */}
            <div className="space-y-6 bg-white md:bg-zinc-50 lg:border w-full max-w-3xl p-5 lg:p-8 lg:rounded-xl lg:shadow-lg text-slate-900">
              <div className="flex flex-col justify-between items-center">
                <h1 className="font-bold text-2xl lg:text-4xl pb-3 ">Contact Us</h1>
                <p className="text-[15px] max-sm:text-center">Got any question or feedback? write a message!</p>
              </div>
              <div>
                <form ref={form} onSubmit={sendEmail}  className="space-y-8 pt-2">
                <div >
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="email" id="user_email" name='user_email' className=" block w-full p-2 lg:p-2.5 shadow-sm bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 " placeholder="name@example.com" required></input>
                </div>
                <div>
                    <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Full Name</label>
                    <input type="text" id="user_name" name='user_name' className="block p-2 lg:p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"  required></input>
                </div>
                <div className="sm:col-span-2">
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Message</label>
                    <textarea id="message" name='message' rows="6" className="block p-2 lg:p-2.5 w-full text-sm text-gray-900 bg-white rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Write your message here..."></textarea>
                </div>
                <input type="submit" value="Send" className=" cursor-pointer py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300" />
                {/* <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-500 sm:w-fit hover:bg-green-600 focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button> */}
              </form>
          
              </div>

            </div>
          </div>
        </div>
    </div>
  )
}

export default ContactPage
