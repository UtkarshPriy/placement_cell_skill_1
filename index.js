import './env.js';
import express from 'express';
import{urlencoded} from 'express';
import path from 'path';
import UserController from './src/controller/user.controller.js';
import StudentController from './src/controller/student.controller.js'
import jsonwebtoken from 'jsonwebtoken';
import db from './src/config/mongoose.js';
import Interview from './src/controller/interview.controller.js';
import Interviewresult from './src/controller/result.controller.js';
import generateCsv from './src/middleware/csvgenerator.middleware.js';
import Authentication from './src//middleware/authentication.middleware.js';
import cookieParser from 'cookie-parser';


// import jsonwebtoken from 'jsonwebtoken' ;



const app = express();



app.set('view engine', 'ejs');

// console.log(path.join(path.resolve(), 'src','view'));
app.set('views', path.join(path.resolve(), 'src', 'view'));
app.use(express.static(path.join(path.resolve(), 'src', 'public')));
app.use(urlencoded({
    extended: true
}));
app.use(cookieParser());


const StudentCntrl = new StudentController();
const UserCntrl = new UserController();
const InterviewCntrl = new Interview();
const Auth = new Authentication();
const InterviewresultCntrl =  new Interviewresult();


app.get('/', UserCntrl.signIn); // Same for user Friendly
app.get('/signIn', UserCntrl.signIn);
app.get('/signUp', UserCntrl.signUp);
app.get('/student',Auth.authenticateToken, StudentCntrl.StudentHome);
app.post('/student',Auth.authenticateToken, StudentCntrl.addStudent);
app.get('/interview',Auth.authenticateToken,InterviewCntrl.interviewForm);
app.post('/interview',Auth.authenticateToken,InterviewCntrl.addInterview);
app.post('/select-interview',Auth.authenticateToken,InterviewresultCntrl.showResult);
app.get('/select-interview',Auth.authenticateToken,InterviewresultCntrl.showResult);
app.post('/mark-results',Auth.authenticateToken,InterviewresultCntrl.addResult);
app.get('/extract-csv',Auth.authenticateToken,generateCsv);
app.post('/signUp',UserCntrl.signUpStore);
app.post('/signIn',Auth.signIn);
app.get('/signOut',Auth.signOut);







export default app;