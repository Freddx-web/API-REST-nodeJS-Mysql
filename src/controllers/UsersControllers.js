/*
*
* Users Controllers
*
*/

// Import Connect
import { getConnection } from "../database/dbMySql.js"
import { date_time } from "./TimeControllers.js"
//import { cipher, update } from "../bcryptjs/encryption.js"

// Get
const getUsers = async (req, res, next) => {  
  try {
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios");
    res.json(result);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Get Id
const getUserId = async (req, res, next) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios WHERE id = ?", id);
    if (result.length > 0) {
      res.json(result);
    } else { 
      res.status(404).json({ message: "Opss.. Usuarios No Encotrado" }); 
    }
  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// Post 
const addUsers = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (name === undefined || email === undefined || password === undefined) {
      res.status(400).json({ message: "Bad Request. Please fill all field." });
    } 
    else { 
      // Query Exist New User in DATABASE
      const connection = await getConnection();
      const result_Email = await connection.query("SELECT * FROM usuarios WHERE email = ? ", email);
      const result_Name = await connection.query("SELECT * FROM usuarios WHERE name = ? ", name);
      if (result_Email.length > 0) {
        
        res.status(404).json({ message: "Este Email a sido registrado, Intete con otro Email" }); 
      } else if (result_Name.length > 0) {
        res.status(404).json({ message: "Este Nombre a sido registrado, Intete con otro Nombre" }); 
      }
      else { 
        
        // Insert New User
        const usuarios = { name, email, password, date_time };
        const connection = await getConnection();
        await connection.query("INSERT INTO usuarios SET ?", usuarios);

        res.status(200).json({ message:"Insert New User"});
        
      }

    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// PUT
const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const connection = await getConnection();
    const result = await connection.query("SELECT * FROM usuarios WHERE id = ?", id);
    if (result.length > 0) {

      if (id === undefined || name === undefined || email === undefined || password === undefined) {
        res.status(400).json({ message: "Bad Request. Please fill all field." });
      }
      else {
        const usuarios = { name, email, password };
        const connection = await getConnection();
        const result = await connection.query("UPDATE usuarios SET ? WHERE id = ?", [usuarios, id]);
        /**
         * Arreglo de Result: Consultar Si existe los datos resibidos 
         * para luego Editarlos y subirlo a la base de datos
         */
        // res.json(result);
        res.json({ message: "Los Datos a Sido Actualizados"})
      }
  

    } else { 

      res.status(404).json({ message: "Opss.. Usuarios No Encotrado" }); 

    }

  } catch (error) {
    res.status(500).send("Falls in Server.");
    res.send(error.message);
  }
};

// DELETE
const  deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const connection = await getConnection();
    const result = await connection.query("DELETE FROM usuarios WHERE id = ?", id);
    if (result.length > 0) {
      res.json(result);
    } else { 
      res.status(404).json({ message: "Los datos A sido Eliminados" }); 
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

// Export
export const methods = { 
  getUsers, 
  getUserId, 
  addUsers, 
  deleteUser,
  updateUser
}