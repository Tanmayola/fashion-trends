const mongoose = require("mongoose");

const connectDB= async(req,res)=>{
    try{
        await mongoose.connect(process.env.dburl);
        // res.status(200).send({
        //     message:`Database is connected`;
        // });//data link layer
        console.log(`database is connect`.bgGreen.white);
    }catch(error){
        // res.status(504).send({
        //     message:`internal server error ${error}`,
        //     success:false,
        //     description:`db not connected`,
        // });
        console.log(`Error ${error}`);
    }
}
module.exports=connectDB;