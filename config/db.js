import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MogoDB is Connected : ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(`MogoDB Error : ${error.message}`.red.underline)
        process.exit(1)
    }
}

export default connectDB