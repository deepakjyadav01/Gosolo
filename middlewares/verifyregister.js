const User = require('../models/user.model');
const Role = require('../models/role.model');
const ROLES = ['provider', 'freelancer', 'blogger'];

module.exports.CheckRoles = async (req, res, next) => {
  try {
    const roles = req.body.role;
    if(roles === undefined){
      res.status(400).send({ message: `roles are required` });
      next();
      return;
    }

    if (roles) {
      for (i = 0; i <= roles.length; i++) {
        if (!ROLES.includes(roles[i]) && roles[i] != undefined) {
          res.status(400).send({ message: `Failed! Role ${roles[i]} does not exist` });
          return;
        }
      } next();
      return;
    }
  } catch (error) {
    res.status(400).send(error);
    console.log(error);
  }
  next();
}

module.exports.CheckUserOrEmail = async (req, res, next) => {
  try {
    // if(req.body.username === undefined){
    //   res.status(400).send({ message: `username is required` });
    //   next();
    //   return;
    // }else if(req.bod)
    const user = await User.findOne({ username: req.body.username });
    const Email = await User.findOne({ email: req.body.email });

    if (user) {
      res.status(400).send({ message: `failed! username ${req.body.username} already exists:` });
      return;
    } else if (Email) {
      res.status(400).send({ message: `failed! email ${req.body.email} already exists:` });
      return;
    } else {
      next();
      return;
    }

  } catch (error) {
    console.log(error)
    res.status(400).send(error)
  }
  next();
}

