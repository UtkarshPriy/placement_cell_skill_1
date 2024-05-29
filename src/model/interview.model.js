import mongoose from 'mongoose';

const {Schema} = mongoose;

const intreviewSchema = new Schema({
    company: String,
    interviewDate: Date
});

const interview = mongoose.model('interview',intreviewSchema);

export default interview;