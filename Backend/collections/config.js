const mongoose=require("mongoose");
// mD0rlyyXe5wOXSEM

let mongoURI = "mongodb://malikhassanhu55:mD0rlyyXe5wOXSEM@ac-relv2ed-shard-00-00.1rhhvjs.mongodb.net:27017,ac-relv2ed-shard-00-01.1rhhvjs.mongodb.net:27017,ac-relv2ed-shard-00-02.1rhhvjs.mongodb.net:27017/?ssl=true&replicaSet=atlas-ne9mje-shard-0&authSource=admin&retryWrites=true&w=majority&appName=library"

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB Atlas:', err);
    });