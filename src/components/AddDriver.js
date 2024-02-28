import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import { NavLink } from "react-router-dom";


function AddDriver() {
  const [newDriver, setNewDriver] = useState({
    firstName: '',
    lastName: ''
  });

  const navigate = useNavigate(); // Initialize useHistory hook

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDriver(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/v1/addDriver', newDriver);
      // Display success message
      window.alert('Driver added successfully');
      // Redirect to Drivers component
      navigate('/drivers');
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  return (
    <div>
      <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
        <div class="relative z-0 w-full mb-5 group">
          <input name="firstName" value={newDriver.firstName} onChange={handleInputChange} 
            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
            focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
        </div>
        <div class="relative z-0 w-full mb-5 group">
          <input name="lastName" value={newDriver.lastName} onChange={handleInputChange}  class="block py-2.5 px-0 w-full
          text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
          focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
          <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
        </div>
        <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
    </div>
  );
}

export default AddDriver;
