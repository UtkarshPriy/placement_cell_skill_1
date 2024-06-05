import mongoose from 'mongoose';

const {Schema} = mongoose;

const userSchema = new Schema({
    name: String,
    mail_id: String,
    password: String
});

const userList = mongoose.model('userList',userSchema);

export default userList;