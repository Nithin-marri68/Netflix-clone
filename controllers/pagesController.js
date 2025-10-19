// controllers/pagesController.js

exports.home = (req, res) => {
  res.render("home");
};

exports.sign = (req, res) => {
  res.render("sign");
};

const allMovies = [
  // ---------- TELUGU ----------
  {
    id: 1,
    title: "RRR",
    cover: "/images/rrr.jpg",
    trailer: "https://www.youtube.com/watch?v=NgBoMJy386M",
    category: "telugu"
  },
  {
    id: 2,
    title: "Pushpa",
    cover: "/images/pushpa.jpg",
    trailer: "https://www.youtube.com/watch?v=Q1NKMPhP8PY",
    category: "telugu"
  },
  {
    id: 3,
    title: "Baahubali",
    cover: "/images/baahubali.jpg",
    trailer: "https://www.youtube.com/watch?v=sOEg_YZQsTI",
    category: "telugu"
  },

  // ---------- HINDI ----------
  {
    id: 4,
    title: "Dangal",
    cover: "/images/dangal.jpg",
    trailer: "https://www.youtube.com/watch?v=x_7YlGv9u1g",
    category: "hindi"
  },
  {
    id: 5,
    title: "Pathaan",
    cover: "/images/pathaan.jpg",
    trailer: "https://www.youtube.com/watch?v=vqu4z34wENw",
    category: "hindi"
  },
  {
    id: 6,
    title: "3 Idiots",
    cover: "/images/3idiots.jpg",
    trailer: "https://www.youtube.com/watch?v=xvszmNXdM4w",
    category: "hindi"
  },

  // ---------- ENGLISH ----------
  {
    id: 7,
    title: "Inception",
    cover: "/images/inception.jpg",
    trailer: "https://www.youtube.com/watch?v=YoHD9XEInc0",
    category: "english"
  },
  {
    id: 8,
    title: "Avatar",
    cover: "/images/avatar.jpg",
    trailer: "https://www.youtube.com/watch?v=5PSNL1qE6VY",
    category: "english"
  },
  {
    id: 9,
    title: "Interstellar",
    cover: "/images/interstellar.jpg",
    trailer: "https://www.youtube.com/watch?v=zSWdZVtXT7E",
    category: "english"
  }
];

// ---------- SHOW ALL MOVIES ----------
exports.browse = (req, res) => {
  res.render("browse", { movies: allMovies, activeCategory: "all" });
};

// ---------- TELUGU CATEGORY ----------
exports.telugu = (req, res) => {
  const teluguMovies = allMovies.filter(movie => movie.category === "telugu");
  res.render("browse", { movies: teluguMovies, activeCategory: "telugu" });
};

// ---------- HINDI CATEGORY ----------
exports.hindi = (req, res) => {
  const hindiMovies = allMovies.filter(movie => movie.category === "hindi");
  res.render("browse", { movies: hindiMovies, activeCategory: "hindi" });
};

// ---------- ENGLISH CATEGORY ----------
exports.english = (req, res) => {
  const englishMovies = allMovies.filter(movie => movie.category === "english");
  res.render("browse", { movies: englishMovies, activeCategory: "english" });
};

// ---------- MOVIE ROUTE ----------
exports.movie = (req, res) => {
  res.redirect("/browse");
};
