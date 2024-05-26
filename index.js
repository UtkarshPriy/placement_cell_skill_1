import express from 'express';
import path from 'path';

const app = express();
// app.use(urlencoded);

app.use(bodyParser.urlencoded({ extended: true }));


app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

export default app;

