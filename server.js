
import app from './app';
import mongoose from 'mongoose';

const port = process.env.PORT || ''; //your severe port here
const DB_URL = process.env.DB_URL || ''; // you db url here

app.listen(port, () => {
  console.log(`Server run at http://localhost:${port}`);
});


// ~~### uncomment the lines above to start the serve with DB ###~~~
/*const connectDb = () => {
  console.log(`Connectiong to MongoDB at ${DB_URL}`);
  return mongoose.connect(DB_URL, {useNewUrlParser: true});
};

connectDb().then(async () => {
  app.listen(PORT, () => {
    console.log(`Server run at http://localhost:${PORT}`);
  })
}).catch(err => {
  console.log('Unable to connect to DB. Error:');
  console.log(err);
});*/

