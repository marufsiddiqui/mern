const passport = require("passport");

module.exports = app => {
  app.get(
    "/auth/google",
    passport.authenticate("google", { scope: ["profile"] })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => res.redirect("/")
  );

  app.get("/api/logout", (req, res) => req.logout());

  app.get("/api/user", (req, res) => res.send(req.user));
};
