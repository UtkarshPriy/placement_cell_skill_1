// import expressCsv from  'express-csv';
import expressCsv from 'express-csv';
// import express from 'express';
import interviewResult from '../model/interviewresult.model.js';


async function  generateCsv  (req,res,next){
    let data = await interviewResult.find({});

    res.status(200).csv(data);

}
export default generateCsv;