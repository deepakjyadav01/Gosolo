const mongoose = require('mongoose');
require('../config/config');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection
  .once('open', () => {
    console.log("connected");
  })
  .on('error', (error) => {
    console.log(error);
  });

 