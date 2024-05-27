import express, { Router } from 'express';
import UserController from './user.controller.js';



const UserCntrl = new UserController();


const router = express.Router();

router.get('/',UserCntrl.signIn);        // Same for user Friendly
router.get('/signIn',UserCntrl.signIn);
router.get('/signUp',UserCntrl.signUp);



// module.exports = router;


export default router;