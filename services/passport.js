const passport = require("passport");
const mongoose = require("mongoose");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

const User = mongoose.model("users");

const GOOGLE_CLIENT_ID =
  "232698157783-pqrn58d88lbc8la4l3r3cai3u1qren9l.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "iQbdeQC3IZRn7OWdNJQnf8oV";

passport.serializeUser((user, done) => done(null, user.id));

passport.deserializeUser((id, done) => User.findById(id, done));

passport.use(
  new GoogleStrategy(
    {
      clientID: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback"
    },
    async (accessToken, refreshToken, profile, done) => {
      const user = await User.findOne({ googleId: profile.id });
      if (user) {
        return done(null, user);
      }

      new User({ googleId: profile.id }).save(done);
    }
  )
);
