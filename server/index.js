const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res)=> res.sendFile(path.join(__dirname, '../src/index.html')));

const init = async() => {
    try{
        const PORT = process.env.PORT || 3000;
        app.listen(PORT, ()=> console.log(`listening to port ${PORT}`))
    }
    catch(err){
        console.log(err);
    }
};

init()