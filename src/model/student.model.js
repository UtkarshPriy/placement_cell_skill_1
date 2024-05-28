import mongoose from 'mongoose';


const{Schema} = mongoose;

const studentSchema = new Schema({
    batch: String,
    name: String,
    college:String,
    status:String,
    dsascore: Number,
    webdscore: Number,
    reactscore: Number


}) ;

const studentList = mongoose.model('studentList',studentSchema);

export default studentList;

    