module.exports = {
  getCurrentUser: getCurrentUser
};

function getCurrentUser(req, res) {
  res.json({
    success: true
  , user: req.user
  })
}
