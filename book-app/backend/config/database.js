const mongoose = require('mongoose');


const connectDatabase = () =>{
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
        //useCreateIndex: true
    }).then(con => {
        console.log(`MongoDB Database connected with host: ${con.connection.host}`)
    })
}

module.exports = connectDatabase