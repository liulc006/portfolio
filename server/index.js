const express = require('express');
const path = require('path');
// const cors = require('cors');

const app = express();

// app.use(cors());
app.use('/dist', express.static(path.join(__dirname, '../dist')));

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