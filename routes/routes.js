import express, { Router } from 'express';
import { addUser, getUserById, getUsers, editUser, deleteUser } from '../controller/userController.js';
const route = express.Router();

route.get('/', getUsers);
route.post('/crear', addUser);
route.get('/:id', getUserById);
route.put('/:id', editUser);
route.delete('/:id', deleteUser);

export default route;