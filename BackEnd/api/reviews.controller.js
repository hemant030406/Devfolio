import ReviewsDAO from "../dao/reviewsDAO.js"

export default class ReviewsController {
  static async apiPostNewUser(req, res, next) {
    try {
      console.log('Posting')
      const reviewResponse = await ReviewsDAO.addUser(
        req.body.name,
        req.body.user,
        req.body.number,
        req.body.gender,
        req.body.email,
        req.body.password,
        req.body.above18
      )
      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  static async apiGetUser(req, res, next) {
    try {
      let user_detail = await ReviewsDAO.getUser(req.body.user)
      if (!review) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(review)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }

  static async apiUpdateCart(req, res, next) {
    try {

      const reviewResponse = await ReviewsDAO.updateCart(
        
        req.body.user,
        req.body.cart
      )

      var { error } = reviewResponse
      if (error) {
        res.status(400).json({ error })
      }

      if (reviewResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update review",
        )
      }

      res.json({ status: "success" })
    } catch (e) {
      res.status(500).json({ error: e.message })
    }
  }

  // static async apiDeleteReview(req, res, next) {
  //   try {
  //     const reviewId = req.params.id
  //     const reviewResponse = await ReviewsDAO.deleteReview(reviewId)
  //     res.json({ status: "success" })
  //   } catch (e) {
  //     res.status(500).json({ error: e.message })
  //   }
  // }

  static async apiGetCart(req, res, next) {
    try {
      let reviews = await ReviewsDAO.getCartByUser(req.body.user)
      if (!reviews) {
        res.status(404).json({ error: "Not found" })
        return
      }
      res.json(reviews)
    } catch (e) {
      console.log(`api, ${e}`)
      res.status(500).json({ error: e })
    }
  }
}


console.log("here 1")
