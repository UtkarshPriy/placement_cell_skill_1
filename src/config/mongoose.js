import mongoose from 'mongoose';

mongoose.connect(process.env.DB_URL);
// mongoose.connect('mongodb://localhost/placement_cell_db');
// mongoose.connect('mongodb+srv://mscbscsscLearn@20@cluster0.gtzr7pr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/placement_cell_db');
// mongoose.connect("mongodb+srv://mscbscssc:Learn@20@cluster2.kz4jqb8.mongodb.net/"");

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connecting db'));

db.once('open',()=>{
    console.log('db connected!!')
});

export default db;



