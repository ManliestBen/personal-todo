var mongoose = require('mongoose');

mongoose.connect(
    `mongodb+srv://sei:${process.env.DATABASE_PW}@sei-1hogc.gcp.mongodb.net/personal-todo?retryWrites=true&w=majority`, 
    { useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false
    }
);

mongoose.connection.on('connected', function() {
    console.log("Mongoose connected to online database");
});

module.exports = mongoose;