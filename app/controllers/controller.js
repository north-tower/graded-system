import Hotel from "../models/hotelsModel.js";
import Driver from "../models/driversModel.js";
import Trip from "../models/tripsModel.js";


export const getAllHotels = async (req, res) => {
    try {
        const hotels = await Hotel.findAll();
        res.json(hotels);
    
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.findAll();
        res.json(drivers);
    
    } catch (error) {
        res.json({ message: error.message });
    }  
}

export const getAllTrips = async (req, res) => {
    try {
        const trips = await Trip.findAll();
        res.json(trips);
    
    } catch (error) {
        res.json({ message: error.message });
    }  
}