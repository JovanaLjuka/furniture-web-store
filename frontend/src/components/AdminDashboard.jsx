import React, { useState } from 'react';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import SubmitBtn from './SubmitBtn';
import axios from 'axios';

Modal.setAppElement('#root');

const url = 'http://localhost:5002/';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data);
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    await axios.post(`${url}`, data, config);
    toast.success('New product added');
    return redirect('/admin');
  } catch (error) {
    const errorMessage = error?.response?.data?.error?.message || 'Error';
    console.log(error);
    toast.error(errorMessage);
    return null;
  }
};

const AdminDashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    price: '',
    image: 'http://localhost:5002/uploads/',
    company: '',
    description: '',
    designer: '',
  });

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleChange = async event => {
    event.preventDefault();
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    try {
      const formData = new FormData();
      formData.append('image', selectedFile);

      await axios.post('http://localhost:5002/uploadimage', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('File uploaded successfully');
    } catch (error) {
      console.error('Error uploading file:', error);
      toast.error('Error uploading file');
    }
  };

  const { products } = useLoaderData();
  console.log(products);

  return (
    <div className="align-elements w-[85%]">
      <div className="my-10 flex flex-row gap-20">
        <div>
          <button onClick={openModal} className="btn btn-outline">
            Add product
          </button>
        </div>
        <div>
          <label htmlFor="image" />
          <input type="file" name="image" id="image" onChange={handleFileChange} />
          <button className="btn btn-outline" onClick={handleFileUpload}>
            Add Image
          </button>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onRequestClose={closeModal} contentLabel="Example Modal">
        <h2>Add Product</h2>

        <Form
          method="POST"
          className="card flex flex-row flex-wrap gap-y-2 rounded-xl  border-brown-700 bg-stone-300 w-96 p-10 my-5 shadow-lg"
        >
          <label htmlFor="title" className="capitalize text-sm">
            title
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="title"
            name="title"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="type" className="capitalize text-sm">
            type
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="type"
            name="type"
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="image" className="capitalize text-sm">
            image
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="image"
            name="image"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="description" className="capitalize text-sm">
            description
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="description"
            name="description"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="price" className="capitalize text-sm">
            price
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="price"
            name="price"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="company" className="capitalize text-sm">
            company
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="company"
            name="company"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <label htmlFor="designer" className="capitalize text-sm">
            designer
          </label>
          <input
            type="text"
            placeholder="Type here"
            id="designer"
            name="designer"
            onChange={handleChange}
            className="input input-bordered input-primary w-full max-w-xs"
          />

          <div className="mt-4 py-2">
            <SubmitBtn text="Add" />
          </div>
        </Form>
      </Modal>

      <div className="grid grid-cols-1 w-full h-full gap-5  lg:gap-8 lg:grid-cols-3  overflow-visible">
        {products.map(product => {
          const { title, price, image, _id, company, amount, color } = product;

          return (
            <article
              key={_id}
              className="card  h-auto p-4 shadow-xl hover:shadow-2xl transition duration-300 group "
            >
              <div to={`/single/${title}`}>
                <img
                  src={image}
                  alt={title}
                  className="rounded-md w-full object-hover h-[400px] group-hover:scale-105"
                />
              </div>
              <div className="card-body items-center text-center pt-5 pb-0 pl-0 pr-0">
                <h2 className=" capitalize tracking-wider p-0">{title}</h2>
                <span className="text-secondary">${price}</span>
                <span className="text-secondary">{company}</span>
              </div>
              {/* <div className="flex items-center justify-center mt-3">
                <button className="bg-white rounded-l border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                </button>
                <div className="bg-gray-100 border-t border-b border-gray-100 text-gray-600 hover:bg-gray-100 inline-flex items-center px-4 py-1 select-none">
                  {amount}
                </div>
                <button className="bg-white rounded-r border text-gray-600 hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50 inline-flex items-center px-2 py-1 border-r border-gray-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                </button>
              </div> */}
              <div className="flex items-center justify-center my-4">
                {color.map((color, index) => {
                  return (
                    <button
                      key={index}
                      type="button"
                      className="badge w-6 h-6 mr-2"
                      style={{ backgroundColor: color }}
                    ></button>
                  );
                })}
              </div>

              {/* <button className="py-2 px-4 text-[#b36969] rounded mt-3 w-full flex items-center justify-center">
                Delete
              </button> */}
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default AdminDashboard;
