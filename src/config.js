import { config } from "dotenv";

config();


export default {
    host: process.env.DBHOST || "localhost",
    database: process.env.DBNAME || "data_base",
    user: process.env.DBUSER || "root",
    password: process.env.DBPASS || ""
}; 

