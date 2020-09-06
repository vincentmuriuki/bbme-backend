/* eslint-disable import/no-named-as-default-member */
import express from 'express';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';

import './config/config';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: process.env.SECRET_KEY,
    saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
    res.send('Welcome to bnmp')
})

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Listening on port ${server.address().port}`);
});

export default app;
