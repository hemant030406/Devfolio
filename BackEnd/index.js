import app from "./server.js"
import mongodb from "mongodb"
import ReviewsDAO from "./dao/reviewsDAO.js"

const MongoClient=mongodb.MongoClient
const url='mongodb+srv://Alonot:vv1CN5TlXbNRKlev@cluster0.a64ie0q.mongodb.net/?retryWrites=true&w=majority'

const port=process.env.PORT ||8080

MongoClient.connect(
    url,
    {
        maxPoolSize:50,
        wtimeoutMS: 2500,
        useNewUrlParser:true
    })
    .catch(err =>{
        console.error(err.stack)
        process.exit(1)
    })
    .then(async client =>{
            app.listen(port,()=>{
                console.log(`listening to the port : ${port}`)
            })
    })