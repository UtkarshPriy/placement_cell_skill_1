
import app from './index.js';
import studentDetails from './src/view/storeDetailform.js/index.js';




const port = 2020;

app.listen(port,()=>{
    console.log(`server is up on ${port}`);
    render(studentDetails);
})