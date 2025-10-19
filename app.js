const express = require('express');
const path = require('path');
const app = express();

// 🎨 View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// 🖼️ Serve static files (CSS, JS, Images)
app.use(express.static(path.join(__dirname, 'public')));

// 🧩 Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// ✅ Use route files
app.use('/', indexRouter);
app.use('/user', usersRouter);

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
