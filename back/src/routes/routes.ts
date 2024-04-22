import Router from 'express';
import Controller from '../controller/controller';


const router = Router();

router.post('/users', Controller.createUser);
router.get('/users', Controller.getUsers);
router.get('/users/:id', Controller.getOneUser);
router.put('/users/:id', Controller.updateUser);
router.delete('/users/:id', Controller.deleteUser);



export default router;