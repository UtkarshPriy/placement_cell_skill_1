// import expressCsv from  'express-csv';
import expressCsv from 'express-csv';
// import express from 'express';
import interviewResult from '../model/interviewresult.model.js';
import studentList from '../model/student.model.js';


async function generateCsv(req, res, next) {

    // studentList.map


            // let fetchedData = await interviewResult.aggregate([{
            //     $lookup: {
            //         from: 'studentList', // Name of the collection to join with
            //         localField: 'studentName', // Field from the students collection
            //         foreignField: 'name', // Field from the courses collection
            //         as: 'check' // Name for the new field that will contain the joined data
            //     }
            // }]);
        
        let fetchedData = await interviewResult.aggregate([
            {
                $lookup: {
                    from: 'studentList', // Name of the collection to join with
                    localField: 'studentName', // Field from the interviewResult collection
                    foreignField: 'studentName', // Field from the studentList collection
                    as: 'studentData' // Name for the new field that will contain the joined data
                }
            }
        ]);
        
        
        


        // let fetchedData = await data1.find({}).lean();

        let data = fetchedData.map((item) => ({

                'student id': item.name,
                'student name': item.studentName,
                'student college': item.college,
                'student status': item.status,
                'DSA Final Score': item.dsascore,
                'WebD Final Score': item.webdscore,
                'React Final Score': item.name,
                'interview date': item.name,
                'interview company': item.company,
                'interview student': item.studentName,
                'result': item.resultstatus,

            })); 
            console.log(fetchedData);
            res.status(200).csv(data,true);

};
        export default generateCsv;






// import expressCsv from 'express-csv';
// import interviewResult from '../model/interviewresult.model.js';
// import studentList from '../model/student.model.js';

// async function generateCsv(req, res, next) {
//     try {
//         // Left join from interviewResult to studentList
//         const leftJoin = await interviewResult.aggregate([
//             {
//                 $lookup: {
//                     from: 'studentlists',
//                     localField: 'studentName',
//                     foreignField: 'studentName',
//                     as: 'studentData'
//                 }
//             },
//             {
//                 $unwind: {
//                     path: '$studentData',
//                     preserveNullAndEmptyArrays: true // Keep interviewResult records without matches
//                 }
//             },
//             {
//                 $project: {
//                     _id: 1,
//                     studentName: 1,
//                     company: 1,
//                     date: 1,
//                     resultstatus: 1,
//                     studentData: 1
//                 }
//             }
//         ]);

//         // Left join from studentList to interviewResult
//         const rightJoin = await studentList.aggregate([
//             {
//                 $lookup: {
//                     from: 'interviewresults',
//                     localField: 'studentName',
//                     foreignField: 'studentName',
//                     as: 'interviewData'
//                 }
//             },
//             {
//                 $unwind: {
//                     path: '$interviewData',
//                     preserveNullAndEmptyArrays: true // Keep studentList records without matches
//                 }
//             },
//             {
//                 $project: {
//                     _id: 1,
//                     studentName: 1,
//                     college: 1,
//                     status: 1,
//                     dsascore: 1,
//                     webdscore: 1,
//                     reactscore: 1,
//                     interviewData: 1
//                 }
//             }
//         ]);

//         // Merge the results
//         const mergedResults = [...leftJoin, ...rightJoin.filter(item => !item.interviewData)];

//         // Map the merged data to the desired format
//         const data = mergedResults.map((item) => {
//             const student = item.studentData || item;
//             const interview = item.interviewData || item;
//             return {
//                 'student id': student._id,
//                 'student name': student.studentName,
//                 'student college': student.college,
//                 'student status': student.status,
//                 'DSA Final Score': student.dsascore,
//                 'WebD Final Score': student.webdscore,
//                 'React Final Score': student.reactscore,
//                 'interview date': interview.date,
//                 'interview company': interview.company,
//                 'interview student': interview.studentName,
//                 'result': interview.resultstatus
//             };
//         });

//         // Send the CSV response
//         res.status(200).csv(data,true);
//     } catch (error) {
//         console.error('Error generating CSV:', error);
//         res.status(500).send('Error generating CSV');
//     }
// }

// export default generateCsv;
