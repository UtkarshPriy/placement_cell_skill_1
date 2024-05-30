import mongoose from 'mongoose';

const {Schema} = mongoose;

const interviwResultSchema = new Schema({
    studentName: String,
    company: String,
    date: Date,
    resultstatus:String
});

const interviewResult = mongoose.model('interviewResult',interviwResultSchema);

export default interviewResult;