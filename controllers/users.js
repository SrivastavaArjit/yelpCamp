const User = require("../models/user");

module.exports.renderRegister = (req, res) => {
  res.render("users/register");
};

module.exports.register = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const user = new User({
      username,
      email,
    });
    const registeredUser = await User.register(user, password);
    req.login(registeredUser, (err) => {
      if (err) {
        return next(err);
      }
      req.flash("success", "Welcome to Yelp Camp!");
      res.redirect("/campgrounds");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/register");
  }
};

module.exports.renderLogin = (req, res) => {
  res.render("users/login");
};

module.exports.login = async (req, res) => {
  const { username } = req.body;
  req.flash("success", `Welcome back to Yelp Camp, ${username}!`);
  const redirectUrl = req.session.returnTo || "/campgrounds";
  delete req.session.returnTo;
  // if (req.session.returnMethod && req.session.returnMethod !== "GET") {
  //   delete req.session.returnMethod;
  //   return res.redirect(307, redirectUrl);
  // }
  res.redirect(redirectUrl);
};

module.exports.logout = async (req, res) => {
  req.logOut(function (err) {
    if (err) {
      return next(err);
    }
  });
  req.flash("success", "Successfully logged out!");
  res.redirect("/campgrounds");
};
