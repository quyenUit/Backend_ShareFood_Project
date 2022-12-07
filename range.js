module.exports = (req, res, next) => {
  res.header("Access-Control-Expose-Headers", "Content-Range");
  res.header("Content-Range", "post 0-24/319");
  res.header("Content-Range", "users/list 0-24/319");

  next();
};
