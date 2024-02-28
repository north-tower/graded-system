
import { Sequelize } from "sequelize";
 
const db = new Sequelize('m', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;
