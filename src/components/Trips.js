import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';
import { NavLink } from 'react-router-dom';





const Trips = () =>  {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
    }, []);

    const getTrips = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/getTrips');
        setTrips(response.data); // Set drivers state directly to response.data
      } catch (error) {
        console.error('Error fetching trips:', error);
      }
    }
 
  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
  setNewSearch(e.target.value);
  };

  const filtered = !search ? trips
  : trips.filter((trip) =>
  trip.driver_id.toLowerCase().includes(search.toLowerCase())
  );


  
return (

  <>
  <NavLink className="m-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/addtrip">
                Add Trip
            </NavLink>
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '1%' ,marginBottom: '1%' ,marginLeft:'40%' , marginRight:'40%'}}>
        <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text" 
        placeholder="Search Trips"></input>
      </div>
    </div>
              
    <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Hotel
                </th>
                <th scope="col" class="px-6 py-3">
                    Driver
                </th>
                <th scope="col" class="px-6 py-3">
                    Start Time
                </th>
                <th scope="col" class="px-6 py-3">
                    End Time
                </th>
                <th scope="col" class="px-6 py-3">
                    Cost
                </th>
            </tr>

        </thead>

         <tbody>
            {filtered.map(trip => (
              
              <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {trip.driverId}
                </th>
               
               
                <td class="px-6 py-4">{trip.hotelId}</td>
                <td class="px-6 py-4">{trip.endTime}</td>
                <td class="px-6 py-4">{trip.startTime}</td>
                <td class="px-6 py-4">{trip.cost}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  </>
)}
  
export default Trips;



