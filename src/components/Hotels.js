import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';
import { NavLink } from "react-router-dom";

const Hotels = () =>  {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
    }, []);

  const getHotels = async () => {
      const response = await axios.get('http://localhost:5000/api/v1/getHotel');
      setHotels(response.data);
  }



  const [search, setNewSearch] = useState("");

  const handleSearchChange = (e) => {
  setNewSearch(e.target.value);
  };

  const filtered = !search ? hotels
  : hotels.filter((hotel) =>
  hotel.name.toLowerCase().includes(search.toLowerCase())
  );
return (
  <>
    {/* <div className="App">
      <div style={{ margin: '0 auto', marginTop: '1%' ,marginBottom: '1%' ,marginLeft:'40%' , marginRight:'40%'}}>
        <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text" 
            placeholder="Search Hotels"></input>
      </div>

    </div> */}

<NavLink className="m-1 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 
        font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" to="/addhotel">
                Add Hotel
            </NavLink>

    <div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                  Hotel Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Address
                </th>
                <th scope="col" class="px-6 py-3">
                  Rating
                </th>
                
                
            </tr>

        </thead>
          <tbody>
            {filtered.map(hotel => (
             <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
             <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {hotel.Name}
             </th>
             <td class="px-6 py-4">
             {hotel.Address}
             </td>
             <td class="px-6 py-4">
             {hotel.Rating}
             </td>
         </tr>
            ))}
          </tbody>
      </table>
    </div>

</>
);
};

export default Hotels;



