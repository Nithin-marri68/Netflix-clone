const userModel = require('../models/user');

exports.profile = (req, res) => {
  // Get user from session
  const userId = req.session.userId;
  const user = userModel.findById(userId);
  
  if (!user) {
    return res.redirect('/sign?error=User not found');
  }

  // Remove password from user object before sending to view
  const { password, ...userWithoutPassword } = user;
  
  res.render('profile', { user: userWithoutPassword });
};