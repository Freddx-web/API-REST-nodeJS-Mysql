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

//http://localhost:4000/api/app
router.get("/", getUsersController.getUsers);

//http://localhost:4000/api/app/1
router.get("/:id", getUsersController.getUserId);

//http://localhost:4000/api/app/
router.post("/", getUsersController.addUsers);

//http://localhost:4000/api/app/1
router.put("/:id", getUsersController.updateUser);

export default router;


