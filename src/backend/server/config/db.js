import mongoose from "mongoose"
const mongoURI = "mongodb+srv://CollectionTest:ydRvsvxOWVQxsGLH@collection.lpmyt.mongodb.net/testedb"
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(mongoURI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
};
export default connectDB;