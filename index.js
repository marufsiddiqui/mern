const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const cookieSession = require("cookie-session");

require("./models/User");
require("./services/passport");

const COOKIE_KEY = "ASDFHASUDHFAJSDasjkdjhfkasdfhak";

const mongooseURI = "mongodb://admin:admin@ds145303.mlab.com:45303/emailydev";
mongoose.connect(mongooseURI);

const app = express();

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [COOKIE_KEY]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

app.get("/", (req, res) => res.send("Hello"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.info("Server is running on port ", port);
});
