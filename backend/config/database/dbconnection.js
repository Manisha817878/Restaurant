import  mongoose from "mongoose";
export const dbconnection = ()=>{
    mongoose
    .connect(process.env.MONGO_URI,{
        dbName:"RESTAURANT"
    })
    .then(()=>{
        console.log("db connected done");
    })
    .catch(err=>{
        console.log(`some error while connection to db ${err}`);
    })
};