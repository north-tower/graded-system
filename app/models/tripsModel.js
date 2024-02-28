import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Trip = db.define('trips',{
    driver_id:{
        type: DataTypes.STRING
    },
    hotel_id:{
        type: DataTypes.STRING
    },  
    start_time:{
        type: DataTypes.STRING
    },
    delivery_time:{
        type: DataTypes.STRING
    },
    rating:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Trip;