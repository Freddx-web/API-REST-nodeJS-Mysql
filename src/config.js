import { config } from "dotenv";

config();

export default {
    host: process.env.DBHOST || "",
    database: process.env.DBNAME || "",
    user: process.env.DBUSER || "",
    password: process.env.DBPASS || ""
};
