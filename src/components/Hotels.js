import React,{useState, useEffect} from "react";
import axios from 'axios';
import '../App.css';

const Hotels = () =>  {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    getHotels();
    }, []);

  const getHotels = async () => {
      const response = await axios.get('http://localhost:5000/');
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
    <div className="App">
      <div style={{ margin: '0 auto', marginTop: '1%' ,marginBottom: '1%' ,marginLeft:'40%' , marginRight:'40%'}}>
        <input className="form-control me-2" onChange={handleSearchChange} value={search} type="text" 
            placeholder="Search Hotels"></input>
      </div>
    </div>

    <div>
      <table class="table table-dark table-borderless">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(hotel => (
            <tr >
              <td>{hotel.id}</td>
              <td>{hotel.name}</td>
              <td>{hotel.address}</td>
            </tr>
            ))}
          </tbody>
      </table>
    </div>

</>
);
};

export default Hotels;



