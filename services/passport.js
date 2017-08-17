const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '232698157783-pqrn58d88lbc8la4l3r3cai3u1qren9l.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = 'iQbdeQC3IZRn7OWdNJQnf8oV';

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  (accessToken, refreshToken, profile, cb) => cb(null, profile)
));
