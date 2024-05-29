import interview from '../model/interview.model.js';
import interviewResult from '../model/interviewresult.model.js';

export default class Interviewresult{

    showResult = async(req,res,next)=>{

        try{
            const result = await interviewResult.find({});
            console.log(result);
            // const interview = res.comany;
            await res.render('result',{
                interviews:result
            });
        }catch(err){
            console.log(err);
        }
        
    }

    // addResult = async()=>{
    //     try{
    //         let newResult = 
    //     }
    // }

};