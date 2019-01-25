let express = require('express');

let app = express();


app.use('/',express.static(__dirname + '/client'));

const PORT = process.env.PORT || 3000;

app.listen(PORT,function(){
    console.log('Server Started : ', PORT)
})