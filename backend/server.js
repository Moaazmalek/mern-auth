const express=require("express");
const colors=require("colors")
const dotenv=require("dotenv").config();
const cors=require('cors')
const PORT=process.env.PORT || 5000
const connectDB=require("./config/db")
connectDB();
const goalRoutes=require('./routes/goalRoutes')
const userRoutes=require('./routes/userRoutes')
const {errorHandler} =require("./middleware/errorMiddleware")
const app=express();
app.use(cors({
    origin:"*"
}))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals',goalRoutes)
app.use('/api/users',userRoutes)
app.use(errorHandler)
app.listen(PORT,() => {

    console.log(`Server is running on port ${PORT}`)
})
