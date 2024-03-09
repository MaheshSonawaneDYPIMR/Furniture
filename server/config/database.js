import mongoose from 'mongoose';

const connectDatabase = async () => {
  try {
    // Replace '<username>', '<password>', and '<cluster-name>' with your actual MongoDB Atlas credentials and cluster name
    const uri = process.env.MONGO_URI;
     
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Additional options can be added here if needed
    });

    console.log('MongoDB connected successfully!');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

export default connectDatabase;
