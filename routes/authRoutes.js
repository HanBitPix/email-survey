'use strict';

const passport = require('passport');

module.exports = (app) => {

  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

  app.get('/auth/google/callback', passport.authenticate('google'));

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.send(req.user);
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};

//86254411526-nv5tu59jc8f5c1tihe9eh5h9kghjo3e1.apps.googleusercontent.com
// dPe7jFH5jnR6GavwSv9-cV_k