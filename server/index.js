const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const Products = require('../database/Product.js');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const UI_PATH = path.join(__dirname, '..', 'shopping', 'dist')
app.use(express.static(UI_PATH));


app.get('/api/Product',function(req,res){
  console.log('get request on /api/Product')
  Products.find().then(product=>res.send(product));
})


 app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  }); 

