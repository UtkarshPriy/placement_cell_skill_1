import express, { Router } from 'express';
import UserController from './user.controller.js';



const UserCntrl = new UserController();


const router = express.Router();

router.get('/',UserCntrl.signIn);
// router.get('/logout',)



// module.exports = router;


export default router;