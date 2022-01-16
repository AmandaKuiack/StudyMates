const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const userController = require("../controller/userController");
const bcrypt = require("bcryptjs");
const User = require("../models/users");
const dotenv = require("dotenv");
dotenv.config();

const localLogin = new LocalStrategy(
  {
    usernameField: "email",
    passwordField: "password",
  },
  (email, password, done) => {
    User.findOne({ email: email }, (err, user) => {
      if (err) throw err;
      if (!user) return done(null, false);
      bcrypt.compare(password, user.password, (err, result) => {
        if (err) throw err;
        if (result === true) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      });
    });
  }
);

passport.serializeUser((user, cb) => {
  cb(null, user.id);
});
passport.deserializeUser((id, cb) => {
  User.findOne({ _id: id }, (err, user) => {
    const userInformation = {
      username: user.username,
    };
    cb(err, userInformation);
  });
});
module.exports = passport.use(localLogin);
