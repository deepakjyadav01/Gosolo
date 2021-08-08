//declarations
const express = require('express');
const router = express.Router();

//imports
const ctrlUser = require('../controllers/user.controller');
const ctrlRole = require('../controllers/role.controller');
const mdlreg = require('../middlewares/verifyregister')

// /api/user
router.post('/addrole',  ctrlRole.addrole);
router.post('/user/register', [mdlreg.CheckRoles, mdlreg.CheckUserOrEmail] ,ctrlUser.register);


module.exports = router;