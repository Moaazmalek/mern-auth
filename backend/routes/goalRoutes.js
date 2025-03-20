const express=require("express");
const router=express.Router();
const {getGoals,updateGoal,deleteGoals,postGoals}=require("../controllers/goalController")
const {protect}=require("../middleware/authMiddleware")

// router.route('/').get(getGoals).post(postGoals)
// router.route('/:id').put(putGoals).delete(deleteGoals)
router.get("/",protect,getGoals)
router.post("/",protect,postGoals)
router.patch("/:id",protect,updateGoal)
router.delete("/:id",protect,deleteGoals)

module.exports=router;