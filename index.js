const express = require ('express');
const app = express();
const port = 3030;
const path = require('path');


app.listen(port, () => { console.log("Server running on " + port)});

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'view/home.html'))
});




