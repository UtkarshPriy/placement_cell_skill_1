
import app from './index.js';
// import studentDetails from './src/view/storeDetailform.js/index.js';



const port = process.env.PORT || 3000;
// const port = 3000;

app.listen(port,()=>{
    console.log(`server is up on ${port}`);
    // render(studentDetails);
})