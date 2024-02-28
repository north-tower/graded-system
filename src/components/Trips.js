import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';




const Trips = () =>  {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    getTrips();
    }, []);

  const getTrips = async () => {
      const response = await axios.get('http://localhost:5000/trips');
      setTrips(response.data);
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
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '1%' ,marginBottom: '1%' ,marginLeft:'40%' , marginRight:'40%'}}>
        <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text" 
        placeholder="Search Trips"></input>
      </div>
    </div>
              
    <div>
      <table class="table table-dark table-borderless">
        <thead>
          <tr>
           <th scope="col">Driver_id</th>
           <th scope="col">Hotel_id</th>
           <th scope="col">Start_time</th>
           <th scope="col">Delivery_time</th>
           <th scope="col">Rating</th>
          </tr>
        </thead>

         <tbody>
            {filtered.map(trip => (
              <tr >
                <td>{trip.driver_id}</td>
                <td>{trip.hotel_id}</td>
                <td>{trip.start_time}</td>
                <td>{trip.delivery_time}</td>
                <td>{trip.rating}</td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>
  </>
)}
  
export default Trips;



