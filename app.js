var express=require('express');
var bodyParser=require('body-parser');
var app=express();

var libroRoutes = require('./routes/libreria.routes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Headers','Authorization, X-API-KEY, X-Request-With, Content-Type,Accept, Access-Control-Allow, Request-Method')
    res.header('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use("/inicio",libroRoutes);

app.get('/',(req,res)=>{
    res.status(501).send("<h1>Hola</h1>");
})
module.exports=app;