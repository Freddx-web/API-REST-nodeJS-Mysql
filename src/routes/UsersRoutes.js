/*
*
* Users Router
*
*/

import { Router } from "express"; 
// Import methods
import { methods as getUsersController } from "../controllers/UsersControllers.js";

const router = Router();

//Routes

router.get("/", getUsersController.getUsers);

export default router;


