import React, { useState, useEffect } from "react";
import axios from 'axios';
import '../App.css';
import { NavLink } from "react-router-dom";


const Drivers = () => {
  const [drivers, setDrivers] = useState([]);
  const [search, setSearch] = useState("");
  const [newDriver, setNewDriver] = useState({
    firstName: '',
    lastName: ''
  });

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
      // Optionally, update the UI to reflect the new driver
      console.log('Driver added successfully');
    } catch (error) {
      console.error('Error adding new driver:', error);
    }
  };

  useEffect(() => {
    getDrivers();
  }, []);

  
  const getDrivers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/v1/getData');
      setDrivers(response.data); // Set drivers state directly to response.data
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  }
  

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search ? drivers : drivers.filter((driver) =>
    driver.first_name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="App">
        {/* <div style={{ margin: '0 auto', marginTop: '1%', marginBottom: '1%', marginLeft: '40%', marginRight: '40%' }}>
          <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text"
            placeholder="Search Drivers"></input>
        </div> */}
        
      </div>
   
      <NavLink className="m-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/adddrivers">
                Add Driver
            </NavLink>
    
       


<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    First name
                </th>
                <th scope="col" class="px-6 py-3">
                    Last Name
                </th>
                
            </tr>

        </thead>
        <tbody>
        {filtered.map(driver => (
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {driver.firstName}
                </th>
                <td class="px-6 py-4">
                {driver.lastName}
                </td>
                
            </tr>
            ))}

           
        </tbody>
    </table>
</div>

    
    </>
  );
};

export default Drivers;
