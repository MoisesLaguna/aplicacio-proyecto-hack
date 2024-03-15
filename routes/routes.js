import { Router } from "express";
import { getUsers, createUser, getUser, deleteUser, updateUser } from "../controlller/controllers.js";

const router = Router();

router.get("/users", getUsers);
router.get("/users/:id", getUser);
router.post("/users", createUser);
router.put("/users/:id", updateUser);
router.delete("/users/:id", deleteUser);

export default router;