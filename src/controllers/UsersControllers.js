/*
*
* Users Controllers
*
*/

// Import Connect
import { getConnection } from "../database/dbMySql.js"

// Get
const getUsers = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT id, nombre, email, password, date FROM usuarios");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// Export
export const methods = { getUsers }









