import { Form } from 'react-router-dom';
import { MdOutlineEmail } from 'react-icons/md';
import { ImLocation } from 'react-icons/im';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs
      .sendForm('service_31lxs4w', 'template_6u8njve', form.current, {
        publicKey: 'dBZg7UWZcdcPKf-tk',
      })
      .then(() => {
        toast.success('Email sent');
        console.log('SUCCESS');
      })
      .catch(err => {
        console.error('failed', err);
      });
    e.target.reset();
  };

  return (
    <section className="align-elements w-[85%] flex items-center justify-between gap-x-12 md:gap-x-2 mt-10">
      <div className="w-[30%] md:w-[40%]">
        {/* info */}
        <h1 className="text-l md:text-3xl font-bold tracking-tight text-gray-900">Contact Us</h1>
        <p className="my-2 md:my-4 text-sm md:text-m leading-8 text-gray-600">
          Feel free to reach out us for any inquiries or assistance. <br />
          We're here to help.
        </p>
        <div className="flex my-2 md:my-6 gap-3">
          <span className="text-sm md:text-l items-center">
            <MdOutlineEmail />
          </span>
          <p className="font-semibold text-sm md:text-l">contact@ufcs.com</p>
        </div>
        <div className="flex my-2 md:my-6 gap-3">
          <span className="text-sm md:text-l items-center">
            <ImLocation />
          </span>
          <p className="font-semibold text-sm md:text-l">123 Main Street,Cityland,Country</p>
        </div>
      </div>
      <div className="w-[70%] md:w-[60%] p-5 mt-3 ml-2 md:ml-5 lg:mt-10 sm:pb-10 lg:px-8 flex justify-center">
        {/* contact form */}
        <Form ref={form} onSubmit={sendEmail} className="mx-auto w-[100%] lg:mr-0 lg:max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstname"
                id="firstname"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  id="firstname"
                  name="firstname"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                id="lastname"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  required
                  id="lastname"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="lastname"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                id="email"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  type="email"
                  required
                  id="email"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="email"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                id="message"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  rows="4"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="message"
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <button
              type="submit"
              value="Send"
              className="w-max mt-5 rounded-2xl border-2 border-[#809bd3] text-[#809bd3] px-5 py-1.5 text-sm font-semibold text-white transition-colors duration-150 ease-in-out  hover:shadow-2xl hover:bg-[#809bd3] hover:text-white-100"
            >
              Send message
            </button>
          </div>
        </Form>
      </div>
    </section>
  );
};

export default ContactForm;
