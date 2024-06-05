// import expressCsv from  'express-csv';
import expressCsv from 'express-csv';
// import express from 'express';
import interviewResult from '../model/interviewresult.model.js';
import studentList from '../model/student.model.js';


async function generateCsv(req, res, next) {

        try{
            let tableStudent = await studentList.find({}).lean();
        let tableResult =  await interviewResult.find({}).lean();
        // console.log(tableStudent);
        // console.log(tableResult);


        


        let fetchedData = tableStudent.map((item1)=>{
            const  matched = tableResult.find((item2)=>{
                return item1.name === item2.studentName; 
            });
        // console.log(item1);

            if(matched){
                return {...item1,...matched}
            }
            // If no match is found, still return the student object
            return item1;
            
        }).filter(item => item !== undefined); // Remove undefined entries
        // console.log(fetchedData);

        // let fetchedData = await data1.find({}).lean();

        let data = fetchedData.map(item => ({

                'student id': item._id, // taking result _id  by default
                'student name': item.name,
                'student college': item.college,
                'student status': item.status,
                'DSA Final Score': item.dsascore,
                'WebD Final Score': item.webdscore,
                'React Final Score': item.reactscore,
                'interview date': item.date.toLocaleDateString(),
                'interview company': item.company,
                'interview student': item.studentName,
                'result': item.resultstatus,

            })); 
            console.log(data);
            res.status(200).csv(data, true);

        }catch(err){
            console.error('Error generating CSV:', err);
            res.status(500).send('Error generating CSV');
        }

        
            
};
        export default generateCsv;
