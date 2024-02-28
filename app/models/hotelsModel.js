import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Hotel = db.define('hotels',{
    name:{
        type: DataTypes.STRING
    },
    address:{
        type: DataTypes.STRING
    },
    uuid:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Hotel;