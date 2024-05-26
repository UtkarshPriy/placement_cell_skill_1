import express from 'express';
import path from 'path';
import user from './src/user/user.js';






const app = express();
// app.use(urlencoded);

// app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');

// console.log(path.join(path.resolve(), 'src','view'));
app.set('views', path.join(path.resolve(), 'src','view'));
app.use(express.static(path.join(path.resolve(), 'src','public')));

app.use('/user',user);


export default app;

