const mongoose = require('mongoose');
const connection = async()=>{
    try{
        const con = await mongoose.connect(process.env.URI);
        console.log(`MongoDb connected: ${con.connection.host}`);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

module.exports = connection