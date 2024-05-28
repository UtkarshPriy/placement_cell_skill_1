import express from 'express';
import path from 'path';
// import user from './src/user/user.js';
import UserController from './src/controller/user.controller.js';







const app = express();
// app.use(urlencoded);

// app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// console.log(path.join(path.resolve(), 'src','view'));
app.set('views', path.join(path.resolve(), 'src','view'));
app.use(express.static(path.join(path.resolve(), 'src','public')));

// app.use('/user',user);

const UserCntrl = new UserController();
app.get('/',UserCntrl.signIn);        // Same for user Friendly
app.get('/signIn',UserCntrl.signIn);
app.get('/signUp',UserCntrl.signUp);



export default app;

