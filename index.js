var mongoose=require('mongoose');
var port='3600';
mongoose.promise=global.Promise;
var app=require('./app');
mongoose.set("strictQuery",false);
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    console.log('Conectado a la base de datos');
    app.listen(port, () => {
        console.log("Servidor corriendo en locahost:3600");
    })
})
.catch((err) => console.log(err))