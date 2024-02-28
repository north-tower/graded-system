import express from "express";
 
import { 
    getAllDrivers,
    getAllHotels,
    getAllTrips,
  
} from "../controllers/controller.js";
 
const router = express.Router();
 
router.get('/', getAllHotels);
router.get('/drivers', getAllDrivers);
router.get('/trips', getAllTrips);
 
export default router;