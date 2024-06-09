import jwt from 'jsonwebtoken';
import userList from '../model/user.model.js';
const privateKey = process.env.JWT_SECRET;  //'absacusjek125';
import cookieParser from 'cookie-parser';


export default class Authentication {

    signIn = async (req, res) => {

        const {
            username,
            password
        } = req.body;
        try {
            // Check Creds
            const user = await userList.findOne({
                name: username,
                password: password
            });
            console.log(user);

            // const user = await userList.find((user)=> user.name === username && user.password === password);
            if (!user) {
                return res.status(401).render('signIn');
            } else {
                // Create Token

                let token = jwt.sign({
                        userID: user.username,
                        userEmail: user.mail_id
                    },

                    privateKey, {
                        expiresIn: '1h'
                    }
                );
                // Return Token

                
                // return res.cookie('jwt', token, { httpOnly: true }).status(201).send('Token stored as cookie');
                return res.cookie('jwt', token, {
                    httpOnly: true
                }).status(201).render('storeStudentDetails');


            }
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }


    }
    signOut = (req, res) => {
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        return res.status(200).render('signIn');

    }


    authenticateToken = (req, res, next) => {

        

        try {
            // Reading token
            // const token = req.headers['authorization'];
            const token = req.cookies['jwt'];

            // If no token return error
            if (!token) {
                return res.status(401).render('signIn');
            }
            // Validating token
            try {
                jwt.verify(token, privateKey);
                next();
            } catch (error) {
                res.status(401).render('signIn');
            }
            // calling next function 
            
        } catch (error) {
            console.log('test' + error);
            res.status(401).render('signIn');
        }



    }



}