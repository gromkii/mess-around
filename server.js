var express = require('express'),
    app     = express(),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override'),
    index   = require('./routes/index');

// === Middleware === //
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static('public'));

// === View Engine === //
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// === Routes === //
app.use('/', index);

app.listen(3000, () => {
  console.log('Server is listening on 3000');
})
