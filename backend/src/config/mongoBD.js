const mongoose = require('mongoose');

var MONGO_URI = 'mongodb+srv://hotel:<hotel>@cluster0.b9bqs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.default.set('useFindAndModify', false);

mongoose.default.connect(MONGO_URI || process.env.MONGODB_URL, {
    useFindAndModify: false,
    useNewUrlParser: true,
    useCreateIndex: true,
});
