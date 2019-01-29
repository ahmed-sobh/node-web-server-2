// Loading express
const express = require('express');
const handlebars = require('hbs');

// Starting new express app
const app = express();

// Set up express view engine
app.set('view engine', 'handlebars');

handlebars.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

handlebars.registerPartials(`${__dirname}/views/partials`);

app.get('/', (req, res, next) => {
  // res.send('<h1>Welcome to our page.<h1>');
  res.render('home.hbs', {
    welcomeMessage: 'Welcome to my website.',
    // currentYear: new Date().getFullYear()
  });
});

app.get('/about', (req, res, next) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
    // currentYear: new Date().getFullYear()
  });
});


app.listen(3000, () => {
  console.log('The app is up on port 3000');
});
