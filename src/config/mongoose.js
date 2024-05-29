import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/placement_cell_db');

const db = mongoose.connection;
db.on('error',console.error.bind(console,'error connecting db'));

db.once('open',()=>{
    console.log('db connected!!')
})

export default db;