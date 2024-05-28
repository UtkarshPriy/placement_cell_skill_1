import mongoose from 'mongoos';

const {Schema} = mongoose;

const interviwResultSchema = new Schema({
    studentName: String,
    comany: String,
    date: Date,
    resultstatus:String
});

const interviewResult = mongoose.model(interviewResult,interviwResultSchema);

export default interviewResult;