import interview from '../model/interview.model.js';
import interviewResult from '../model/interviewresult.model.js';
export default class Interviewresult{

    showResult = async(req,res,next)=>{

        try{

            const interviewArray = await interviewResult.find({company:req.body.company});
            const result = await interviewResult.find({}).distinct('company');
            // const result = await interviewResult.find({ company: { $in: distinctCompanies } }).select('company _id');
            const result2 = result.map(item => ({ company: item }));
            

            // const 

            // console.log(req.body);
  
            await res.status(200).render('result',{
                interviews:result2,
                students:interviewArray
            });
            // res.status(200);
        }catch(err){
            console.log(err);
            res.status(400).send('Error fetching interview results');

        }

        
    }

    addResult = async(req,res,next)=>{
        try{
            
            const { results = {} } = req.body;
            Object.keys(results).map(async (key) => {
                const value = results[key];
                await interviewResult.findOneAndUpdate({_id: key}, {$set:{resultstatus: value}});
                
                
            });
          
            res.status(200).render('submitted');
            
        }catch(err){
            console.log(err);
        }
    }
};