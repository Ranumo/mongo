const mongoose = require('mongoose');
require('dotenv').config();

mongoose
  .connect(process.env.MONGODB_URL, {
    userNewUrlParser: true, //optioita eli konffimäärityksiä
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Database connection succesful');
  })
  .catch((err) => {
    console.error('Database connection error: ' + err);
  });
