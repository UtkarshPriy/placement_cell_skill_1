import express from 'express';
import{urlencoded} from 'express';
import path from 'path';
import UserController from './src/controller/user.controller.js';
import StudentController from './src/controller/student.controller.js'
import jsonwebtoken from 'jsonwebtoken';
import db from './src/config/mongoose.js';
import Interview from './src/controller/interview.controller.js';
import Interviewresult from './src/controller/result.controller.js';




const app = express();



app.set('view engine', 'ejs');

// console.log(path.join(path.resolve(), 'src','view'));
app.set('views', path.join(path.resolve(), 'src', 'view'));
app.use(express.static(path.join(path.resolve(), 'src', 'public')));
app.use(urlencoded({
    extended: true
}));


const StudentCntrl = new StudentController();
const UserCntrl = new UserController();
const InterviewCntrl = new Interview();
const InterviewresultCntrl =  new Interviewresult();
app.get('/', UserCntrl.signIn); // Same for user Friendly
app.get('/signIn', UserCntrl.signIn);
app.get('/signUp', UserCntrl.signUp);
app.get('/student', StudentCntrl.StudentHome);
app.post('/student', StudentCntrl.addStudent);
app.get('/interview',InterviewCntrl.interviewForm);
app.post('/interview',InterviewCntrl.addInterview);
app.post('/select-interview',InterviewresultCntrl.showResult);
app.get('/select-interview',InterviewresultCntrl.showResult);
app.post('/mark-results',InterviewresultCntrl.addResult);
// app.get('/mark-results',InterviewresultCntrl.addResult);




export default app;