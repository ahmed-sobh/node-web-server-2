// Loading express
const express = require('express');
const hbs = require('hbs');

// Starting new express app
const app = express();

// Making dynamic port
const port = process.env.PORT || 3000;

// Set up express view engine
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerPartials(`${__dirname}/views/partials`);

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

app.get('/projects', (req, res, next) => {
  res.render('projects.hbs');
});

app.listen(port, () => {
  console.log(`The app is up on port ${port}.`);
});
