// Middleware to check if user is authenticated
function requireAuth(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      res.redirect('/sign?error=Please login to access this page');
    }
  }
  
  // Middleware to check if user is already logged in (redirect if logged in)
  function requireGuest(req, res, next) {
    if (req.session && req.session.userId) {
      return res.redirect('/browse');
    } else {
      return next();
    }
  }
  
  module.exports = {
    requireAuth,
    requireGuest
  };