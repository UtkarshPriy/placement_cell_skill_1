import studentList from '../model/student.model.js'

export default class StudentController {

    StudentHome= async(req,res,next)=>{
        try{
            res.render('storeStudentDetails');
        }
        catch(err){
            console.log(err);
            next(err);
        }
        
    }

    addStudent = async (req, res,next) => {
        let newStudent = {
            batch: req.body.batch,
            name: req.body.name,
            college: req.body.college,
            status: req.body.status,
            dsascore: req.body.dsaScore,
            webdscore: req.body.webdScore,
            reactscore: req.body.reactScore
        }
        // console.log(newStudent);


        try{
            // console.log(newStudent);
            await studentList.create(newStudent)
        }
        catch(err){
            console.log(err);

        }
        res.redirect('/student');

    }

};