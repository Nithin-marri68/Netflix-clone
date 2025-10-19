exports.profile = (req, res) => {
  const user = {
    name: "Ramya Sree",
    email: "ramya@example.com",
    watchlist: ["Money Heist", "Stranger Things", "Wednesday"]
  };
  res.render('profile', { user });
};
