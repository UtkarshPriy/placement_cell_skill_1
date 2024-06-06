
import userList from '../model/user.model.js';
export default class UserController {

    signIn = async(req,res,next)=>{

        res.render('signIn');

    }
    signUp = async(req,res,next)=>{
        res.render('signUp');
    }

    signUpStore = async (req,res,next)=>{

        let { username, email, password} =  req.body;
        let newUser = {
            name:username,
            mail_id:email,
            password:password

        };
        try{
            await userList.create(newUser);
        }catch(err){
            console.log(err);
        }

        res.status(201).render('storeStudentDetails')
        

        

    }
   

};