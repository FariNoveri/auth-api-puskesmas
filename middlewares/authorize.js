// middlewares/authorizeRoles.js
module.exports = (...allowedRoles) => {
    return (req, res, next) => {
      const user = req.user;
      if (!user) {
        return res.status(401).json({ message: 'Unauthorized' });
      }
  
      if (!allowedRoles.includes(user.role)) {
        return res.status(403).json({ message: 'Forbidden: Access denied' });
      }
  
      next();
    };
  };
  