import interview from '../model/interview.model.js';
import interviewResult from '../model/interviewresult.model.js';
import studentList from '../model/student.model.js'


export default class Interview{

    interviewForm = async(req,res,next)=>{
        try{
            await res.render('ceateInterview');
        }catch(err){
            console.log(err);
        }
        
    }

    addInterview = async(req,res,next)=>{
        
        const newInterview = {
            company: req.body.companyName,
            interviewDate: req.body.interviewDate
        }
        const student = studentList.find({});
        
        newInterview.forEach(student => {
            interviewResult.push({ studentName: student.name, comany: newInterview.company, date:newInterview.interviewDate , resultstatus:'null'});
                }); 
        
        try{
            await interview.create(newInterview);
        }catch(err){
            console.log(err); 
        }
        res.redirect('/interview');


    }
}