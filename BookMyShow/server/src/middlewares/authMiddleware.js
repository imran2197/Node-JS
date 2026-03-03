const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  try {
    const token = req.cookies.token.split(" ")[1];
    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);
    req.body.userId = verifiedToken.userId;
    next();
  } catch (err) {
    res.status(401).json({
      success: false,
      message: "Token Invalid",
    });
  }
};

module.exports = authMiddleware;
