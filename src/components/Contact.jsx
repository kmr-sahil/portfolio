import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

function Contact() {

  const [disable, setDisable] = useState(true)
  const [details, setDetails] = useState({
    email: "",
    message: "",
  })

  const notify = () => {
    if(disable) {
      toast('Add proper email or message', {
        duration: 8000,
        style: {
          background: '#ffadad',
        },
      });
    }
    else {
      toast('Message send successfully', {
        duration: 8000,
        style: {
          background: '#cfffcc',
        },
      });
    }
    
  }

  useEffect(() => {
    let a = details.email.includes('@') 
    let b = details.email.includes('.')
    let c = details.email.includes(' ')
    let d = ((details.email.charAt(details.email.length - 1) === '@') || (details.email.charAt(details.email.length - 1) === '.') ? true : false)

    if( !d === true && !c === true && a === true && b === true && details.email.length > 4 && details.message.length > 10){
      setDisable(false)
    } else {
      setDisable(true)
    }
  }, [details])

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if(disable) {
      return
    } 
    else {

    emailjs.sendForm('service_0eo1oyv', 'template_u5c3v9t', form.current, 'PyJ-C_RjU7bKsFmiD')
      .then((result) => {
          console.log(result.text);
          
          e.target.from_email.value = '';
          e.target.message.value = '';

      }, (error) => {
          console.log(error.text);
      });
    }
  };

  return (
    <div data-aos="fade" className=' relative outline outline-l-secondary dark:outline-d-secondary outline-[2px] rounded-xl px-[1rem] mb-[6rem] laptop:basis-[70%] laptop:mt-[6rem]'>
        <div className='left-0 top-6 box-border font-mont font-bold text-[1rem] tablet-lg:text-[18px] bg-l-text dark:bg-d-accent absolute w-[8rem] rounded-sm border-r-[15px] border-r-l-primary dark:border-r-d-primary  border-t-[16px] border-b-[16px] border-t-l-text dark:border-t-d-accent border-b-l-text dark:border-b-d-accent'>
            <h1 className='absolute -top-3 left-2 text-l-primary dark:text-d-primary'>Contact</h1>
        </div>
        <div className='flex flex-col justify-start items-start pt-[5rem] pb-[1rem] gap-4'>
          <form ref={form} onSubmit={sendEmail} className='flex flex-col justify-start items-start self-stretch gap-4'>

            <input id='reset' className='self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-mont font-light text-[10px] text-l-text dark:text-d-text px-[1rem] py-[0.5rem]' type="email" name="from_email" value={details.email} onChange={(e) => setDetails({...details, email: e.target.value})} placeholder='11.sahil.kmr@gmail.com'/>
            <textarea id='reset' className='self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-mont font-light text-[10px] text-l-text dark:text-d-text px-[1rem] py-[0.5rem]' name="message" rows="5" value={details.message} onChange={(e) => setDetails({...details, message: e.target.value})} placeholder='enter your message'></textarea>
            <input className='cursor-pointer self-stretch flex justify-center items-baseline gap-2 grow bg-l-secondary dark:bg-d-secondary rounded-md font-mont font-light text-[10px] text-l-text dark:text-d-text px-[1rem] py-[0.5rem] ' type="submit" value="Send message" onClick={notify} />
            <Toaster />

          </form>

            <p className='self-center font-light text-[10px] '>-- or just --</p>

            <div className='self-stretch bg-l-secondary dark:bg-d-secondary flex flex-col rounded-md items-start px-[0.75rem] py-[0.75rem]'>
                <h3 className='font-medium text-[12px] tablet-lg:text-[1rem]'>Want to hire me as a freelancer ? Let’s Discuss</h3>
                <p className='font-light text-[10px] tablet-lg:text-[12px]'>Drop your message and let's discuss about your project.</p>
                <a  href="https://wa.me/919163420585?text=I%27m%20inquiring%20about%20a%20project%20" className='mt-[0.75rem] w-[100%] bg-[#4ADE80] font-medium text-[10px] py-[0.5rem] rounded-md text-l-text'>Chat on Whatsapp</a>
            </div>
        </div>

    </div>
  )
}

export default Contact