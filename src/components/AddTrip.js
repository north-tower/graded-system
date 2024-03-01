import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useHistory hooks

function AddTrip() {
    const [newTrip, setNewTrip] = useState({
        driverId: '',
        hotelId: '',
        startTime: '',
        endTime: '',
        cost:''
      });
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewTrip(prevState => ({
          ...prevState,
          [name]: value
        }));
    };
    const navigate = useNavigate(); // Initialize useHistory hook
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await axios.post('http://localhost:5000/api/v1/addTrip', newTrip);
          // Display success message
          window.alert('Trip added successfully');
          // Redirect to Drivers component
          navigate('/trips');
        } catch (error) {
          console.error('Error adding new trip:', error);
        }
      };
  return (
    <div>
    <form class="max-w-md mx-auto" onSubmit={handleSubmit}>
    <div class="relative z-0 w-full mb-5 group">
      <input name="driverId" value={newTrip.driverId} onChange={handleInputChange} 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
        focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_email" class="peer-focus:font-medium absolute 
      text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
      -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
       rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
       peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Driver Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input name="hotelId" value={newTrip.hotelId} onChange={handleInputChange} 
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
        focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_email" class="peer-focus:font-medium absolute 
      text-sm text-gray-500 dark:text-gray-400 duration-300 transform 
      -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
       rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto 
       peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Hotel Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input name="startTime" value={newTrip.startTime} onChange={handleInputChange}  class="block py-2.5 px-0 w-full
      text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
      focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500
       peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Start Date</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input name="endTime" value={newTrip.endTime} onChange={handleInputChange}  class="block py-2.5 px-0 w-full
      text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
      focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">End Date</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
      <input name="cost" value={newTrip.cost} onChange={handleInputChange}  class="block py-2.5 px-0 w-full
      text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500
      focus:outline-none focus:ring-0 focus:border-blue-600 peer" required />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 
      origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Budget</label>
    </div>
    <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </form>
</div>
  )
}

export default AddTrip