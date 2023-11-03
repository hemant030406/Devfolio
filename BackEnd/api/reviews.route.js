import express from "express"
import ReviewsCtrl from "./reviews.controller.js"

console.log("hello")

const router=express.Router()

router.route('/').get((req,res)=>{
    res.send("Welcome")
})

router.route("/cart/:id")
        .get(ReviewsCtrl.apiGetCart)
        .put(ReviewsCtrl.apiUpdateCart)
router.route("/new").post(ReviewsCtrl.apiPostNewUser)
router.route("/user").get(ReviewsCtrl.apiGetUser)

export default router