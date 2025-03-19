const express=require("express");
const router=express.Router();
const goalController=require("../controllers/goalController")
router.get("/",goalController.getGoals)
router.post("/",goalController.postGoals)
router.put("/:id",goalController.putGoals)
router.delete("/:id",goalController.deleteGoals)

module.exports=router;