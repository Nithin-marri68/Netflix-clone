const express = require('express');
const path = require('path');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();

// 🎨 View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 📝 Body parser middleware (to parse form data)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 🍪 Session middleware
app.use(session({
  secret: 'your-secret-key-change-this-in-production',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false, // Set to true if using HTTPS
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
  }
}));

// 👤 Add session data to all views (Step 11)
app.use((req, res, next) => {
  res.locals.userId = req.session?.userId;
  res.locals.userName = req.session?.userName;
  res.locals.userEmail = req.session?.userEmail;
  next();
});

// 🖼️ Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// 🧩 Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const authRouter = require('./routes/auth'); // New auth routes

// ✅ Use route files
app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/auth', authRouter); // New auth routes

// 🛠️ 404 (Not Found) Handler
app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found' });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('🎬 Netflix Clone Server is running!');
  console.log(`✅ Server running at: http://localhost:${PORT}`);
});