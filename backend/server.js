const express=require("express");
const dotenv=require("dotenv").config();
const PORT=process.env.PORT || 5000
const goalRoutes=require('./routes/goalRoutes')

const app=express();

app.use('/api/goals',goalRoutes)
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`)
})
