var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
const bcrypt = require('bcrypt');
//var testModule = require('./modules/test-modules');
var database = require('./modules/database');
var usuariosRouter = require('./routes/usuarios-router');
var categoriasRouter = require('./routes/categorias-router');
var ordenesRouter = require('./routes/ordenes-router');
var app = express();

app.use(cors());//permita peticiones de otros origenes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use('/usuarios', usuariosRouter);
app.use('/categorias', categoriasRouter);
app.use('/ordenes', ordenesRouter);

app.get('/',function(req,res){
    //res.send(testModule.mostrarmensaje()+testModule.x); //para prueba del modulo
    res.send('Servidor backend en line');
});

app.listen(8888, function(){
    console.log("Backend online in port: 8888");
});