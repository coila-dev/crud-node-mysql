const express = require('express');
const path  = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const bodyParser = require('body-parser');

const app = express();
 
// setting
app.set('port', process.env.PORT || 9000);
app.set('view engine','ejs');
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.set('views', path.join(__dirname,'views'));


// middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:3306,  
    database:'crudnodemysql'
},'single'));
app.use(express.urlencoded({extended:false}));

//routes
require('./src/config/routes').init(app);


// static files
app.use(express.static(path.join(__dirname,'public')));

app.listen(9000,()=>{
    console.log('Server on port 9000');
});