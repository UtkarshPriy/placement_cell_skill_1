import expressCsv from 'express-csv';
import interviewResult from '../model/interviewresult.model.js';
import studentList from '../model/student.model.js';

async function generateCsv(req, res, next) {
    try {
        // Fetch data from both collections
        const tableStudent = await studentList.find({}).lean();
        const tableResult = await interviewResult.find({}).lean();

        // Merge the data based on the common column 'studentName'
        const mergedData = tableStudent.map((student) => {
            const matchingResult = tableResult.find((result) => result.studentName === student.name);

            if (matchingResult) {
                return { ...student, ...matchingResult };
            }

            // If no match is found, return the student object as is
            return student;
        });

        // Map the merged data to the desired CSV format
        const csvData = mergedData.map((item) => ({
            'student id': item._id,
            'student name': item.name,
            'student college': item.college || '',
            'student status': item.status || '',
            'DSA Final Score': item.dsascore || '',
            'WebD Final Score': item.webdscore || '',
            'React Final Score': item.reactscore || '',
            'interview date': item.date || '',
            'interview company': item.company || '',
            'interview student': item.studentName || '',
            'result': item.resultstatus || ''
        }));

        // Send the CSV response
        res.status(200).csv(csvData, true);
    } catch (error) {
        console.error('Error generating CSV:', error);
        res.status(500).send('Error generating CSV');
    }
}

export default generateCsv;
