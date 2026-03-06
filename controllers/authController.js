const userModel = require('../models/user');

// Show login page
exports.showLogin = (req, res) => {
  const error = req.query.error || null;
  res.render('sign', { 
    error,
    isLogin: true 
  });
};

// Handle login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = userModel.findByEmail(email);
    
    if (!user) {
      return res.render('sign', {
        error: 'Invalid email or password',
        isLogin: true
      });
    }

    // Verify password
    const isValidPassword = await userModel.verifyPassword(password, user.password);
    
    if (!isValidPassword) {
      return res.render('sign', {
        error: 'Invalid email or password',
        isLogin: true
      });
    }

    // Create session
    req.session.userId = user.id;
    req.session.userName = user.name;
    req.session.userEmail = user.email;

    // Redirect to browse page
    res.redirect('/browse');
  } catch (error) {
    console.error('Login error:', error);
    res.render('sign', {
      error: 'An error occurred. Please try again.',
      isLogin: true
    });
  }
};

// Show register page
exports.showRegister = (req, res) => {
  const error = req.query.error || null;
  res.render('sign', {
    error,
    isLogin: false
  });
};

// Handle registration
exports.register = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  try {
    // Validation
    if (!name || !email || !password) {
      return res.render('sign', {
        error: 'All fields are required',
        isLogin: false
      });
    }

    if (password !== confirmPassword) {
      return res.render('sign', {
        error: 'Passwords do not match',
        isLogin: false
      });
    }

    if (password.length < 6) {
      return res.render('sign', {
        error: 'Password must be at least 6 characters',
        isLogin: false
      });
    }

    // Check if user already exists
    const existingUser = userModel.findByEmail(email);
    if (existingUser) {
      return res.render('sign', {
        error: 'Email already registered',
        isLogin: false
      });
    }

    // Create new user
    const newUser = await userModel.createUser(name, email, password);

    // Create session
    req.session.userId = newUser.id;
    req.session.userName = newUser.name;
    req.session.userEmail = newUser.email;

    // Redirect to browse page
    res.redirect('/browse');
  } catch (error) {
    console.error('Registration error:', error);
    res.render('sign', {
      error: 'An error occurred. Please try again.',
      isLogin: false
    });
  }
};

// Handle logout
exports.logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('Logout error:', err);
    }
    res.redirect('/');
  });
};