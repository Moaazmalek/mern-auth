
const asyncHandler=require('express-async-handler')

const getGoals=async(req,res) => {
    res.status(200).json({
        message:"Get goals"
    })
}
const postGoals=asyncHandler(async(req,res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error("Please add a text filed")

    }
    res.status(200).json({
        message:"Set goals"
    })
})
const putGoals=asyncHandler(async(req,res) => {
    res.status(200).json({
        message:`Update goal ${req.params.id}`
    })
})
const deleteGoals=asyncHandler(async(req,res) => {
    res.status(200).json({
        message:`Delete goal ${req.params.id}`
    })
})
module.exports={
    getGoals,
    postGoals,
    deleteGoals,
    putGoals
    
}