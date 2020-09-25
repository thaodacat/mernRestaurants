console.log('config.database.js')


const mongoose = require('mongoose');
const database = "restaurant";

mongoose.connect(`mongodb://localhost/${database}`,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(res => console.log("supercalifragilisticexpialidocious!!!"))
    .catch(err => console.log(`opnomatopoeia ${err}`))