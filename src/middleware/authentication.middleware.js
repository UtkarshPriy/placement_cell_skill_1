import jwt from 'jsonwebtoken';
import userList from '../model/user.model.js';
const privateKey = 'absacusjek125';


export default class Authentication {

    signIn =  (req, res, next) => {

        const {
            username,
            password
        } = req.body;
        try {
            // Check Creds
            const user =  userList.findOne({
                name: username,
                password: password
            });

            // const user = await userList.find((user)=> user.name === username && user.password === password);
            if (!user) {
                res.status(401).send('Invalid Creds');
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
                
                // return token;
                next();
                return res.status(201).send(token);
                

            }
        } catch (error) {
            console.log(error);
            return res.status(500).send('Internal Server Error');
        }


    }

    authenticateToken = (req, res, next) => {

        // Reading token
        const token = req.headers['authorization'];

        // If no token return error
        if (!token) {
            return res.status(401).render('signIn');
        }
       // Validating token
        try {
            jwt.verify(token, privateKey);
        } catch (error) {
            res.status(401).send('Unauthorized');
        }
        // calling next function 
        next();

    }



}