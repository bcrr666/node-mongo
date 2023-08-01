const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect('mongodb+srv://brucerodriguez94:ZelZkSy21RZqJodG@cluster0.ojrgyh5.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Base de datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos')
    }
}

module.exports = {
    dbConnection
}