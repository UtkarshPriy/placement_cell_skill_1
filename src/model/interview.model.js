import mongoose from 'mongoose';

const {Schema} = mongoose;

const intreviewSchema = new Schema = {
    company: String,
    interviewDate: Date
}

const interview = mongoose.model(intreviewSchema,interview);

export default interview;