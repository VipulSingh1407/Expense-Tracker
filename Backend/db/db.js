const mongoose=require('mongoose');

const db= async()=>{
    try{
        mongoose.set('strictQuery',false)
        await mongoose.connect(process.env.MONGO_URL)
        console.log("MongoDB Connected...")


    }
    catch(error){
        console.log(`DB COnnection error`)

    }
}

module.exports={db}