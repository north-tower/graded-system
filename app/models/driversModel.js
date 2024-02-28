import { Sequelize } from "sequelize";
import db from "../config/db.js";
 
const { DataTypes } = Sequelize;
 
const Driver = db.define('drivers',{
    first_name:{
        type: DataTypes.STRING
    },
    last_name:{
        type: DataTypes.STRING
    },
    uuid:{
        type: DataTypes.STRING
    }
},{
    freezeTableName: true
});
 
export default Driver;