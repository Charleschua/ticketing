import mongoose from 'mongoose';
import { app } from './app';

//app.get('/api/users/currentuser', (req, res) => {
//  res.send('Hi there!');
//});

const start = async () => {
  console.log('Startting up..');
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY must be defined');
  }
  if (!process.env.MONGO_URI) {
    throw new Error('MONGO_URO must be defined');
  }
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      //below are just some config for mongoose only
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err);
  }

  app.listen(3000, () => {
    console.log('Listening on port 3000!!!!!!!!');
  });
};

start();
