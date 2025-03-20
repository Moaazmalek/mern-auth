const mongoose=require("mongoose")

//function to connect 
const connectDB=async() => {
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongodb connected:${conn.connection.host}`.cyan.underline)

    }catch(error) {
        console.log(error)
        //exist the process with failure which is 1
        process.exit(1)

    }
}
module.exports=connectDB