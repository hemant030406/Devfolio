import mongodb from "mongodb"
const ObjectId = mongodb.ObjectID

let reviews

export default class ReviewsDAO {
  static async injectDB(conn) {
    if (reviews) {
      return
    }
    try {
      reviews = await conn.db("reviews").collection("reviews")
    } catch (e) {
      console.error(`Unable to establish collection handles in userDAO: ${e}`)
    }
  }

  static async addUser(name, user_name, number,gender,email,password,above18) {
    try {
      const reviewDoc = {
        name: name,
        user_name: user_name,
        number: number,
        gender:gender,
        email:email,
        password:password,
        above18:above18
      }
      console.log("adding")
      return await reviews.insertOne(reviewDoc)
    } catch (e) {
      console.error(`Unable to post review: ${e}`)
      return { error: e }
    }
  }

  static async getUser(user_name) {
    try {
      return await reviews.findOne({ user_name:user_name })
    } catch (e) {
      console.error(`Unable to get review: ${e}`)
      return { error: e }
    }
  }

  static async updateCart(user_name,cart) {
    try {
      const updateResponse = await reviews.updateOne(
        { user_name:user_name },
        { $set: { cart:cart },
        $currentDate: { lastModified: true } }
      )

      return updateResponse
    } catch (e) {
      console.error(`Unable to update review: ${e}`)
      return { error: e }
    }
  }

  // static async deleteReview(reviewId) {

  //   try {
  //     const deleteResponse = await reviews.deleteOne({
  //       _id: ObjectId(reviewId),
  //     })

  //     return deleteResponse
  //   } catch (e) {
  //     console.error(`Unable to delete review: ${e}`)
  //     return { error: e }
  //   }
  // }

  static async getCartByUser(user_name) {
    try {
      return await reviews.findOne({ user_name:user_name })
    } catch (e) {
      console.error(`Unable to get review: ${e}`)
      return { error: e }
    }
  }

}


console.log("here 3")
