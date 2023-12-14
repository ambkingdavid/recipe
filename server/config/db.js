import mongoose from 'mongoose';

const mongoClient = async () => {
    const URI = process.env.MONGO_URI;
    try {
        await mongoose.connect(URI);
        console.log(`Connected to MongeDb ${mongoose.connection.host}`);
    } catch (error) {
        console.log(error);
    }
}

export default mongoClient;
