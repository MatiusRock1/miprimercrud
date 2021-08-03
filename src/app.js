const express = require('express');
const path = require('path')
const morgan= require('morgan');
const mongoose = require('mongoose');

const app = express();


//setings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

//conectando base de datos
mongoose.connect('mongodb+srv://MatiusRock:3CASL3u1Kpibt7Yi@cluster0.xglab.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
.then(db => console.log('db conectada'))
.catch(err => console.log(err));
//importing routes
const indexRouters = require('./routes/index');

//midlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));


//routes
app.use('/', indexRouters);


//starting the server
app.listen(app.get('port'),() =>{
    console.log(`Server on port ${app.get('port')}`);
})