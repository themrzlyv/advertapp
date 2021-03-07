import mongoose from 'mongoose'



const ConnectDb = () => {
    if(mongoose.connections[0].readyState){
        console.log(`Already Connected`)
    }


    mongoose.connect(`${process.env.MONGO_URI}`,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => console.log(`Mongo Db Connected`))
    .catch((error) => console.log(error))
}

export default ConnectDb;