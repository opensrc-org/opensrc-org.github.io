/**
 * Created by Ashish Goyal on 2/24/2017.
 */


const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));



app.use('/',express.static(__dirname +'/Public_html'));


app.get('/',function(req,res)
{
   res.render('thanks.html');
});
app.listen(2244,function () {
    console.log('Website Is Running Now');
});

