
export default class UserController {

    signIn = async(req,res,next)=>{

        res.render('signIn');

    }
    signUp = async(req,res,next)=>{
        res.render('signUp');
    }

};