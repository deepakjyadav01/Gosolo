//declarations
const express = require('express');
const router = express.Router();
const upload = require('../middlewares/imageupload')


//imports
const ctrlUser = require('../controllers/user.controller');
const ctrlRole = require('../controllers/role.controller');
const ctrlUpload = require('../controllers/upload.controller');
const ctrlProfile = require('../controllers/profile.controllers')
const ctrlActivity = require('../controllers/activity.controller');
const ctrlBlogs = require('../controllers/blogs.controller');
const chatRoom = require('../controllers/chatroom.controller');
const mdlreg = require('../middlewares/verifyregister')
const auth = require('../middlewares/AuthJwt')

// /api/user registration
router.post('/addrole', ctrlRole.addrole);
router.post('/auth/register', [mdlreg.CheckRoles, mdlreg.CheckUserOrEmail], ctrlUser.register);
router.post('/auth/login', ctrlUser.login);
router.post("/auth/refreshtoken", ctrlUser.refreshToken);
router.put("/auth/UpdateUserById" , ctrlUser.updatereg)
router.patch("/auth/forgotpassword" , ctrlUser.forgotpass);
router.delete("/auth/RemoveUser" , ctrlUser.RemoveUser);

//api/ image uploads 
router.post("/auth/upload", [auth.verifyToken], upload.single('file') , ctrlUpload.uploadFile );
router.post("/auth/getImage",[auth.verifyToken] ,ctrlUpload.getImagesById);
router.delete("/auth/deleteImage", ctrlUpload.DeleteImage);

//api profile 
router.post("/auth/addqualifications", ctrlProfile.qualifications);
router.post("/auth/addjob", ctrlProfile.job);
router.post("/auth/addworksample", ctrlProfile.work);
router.post("/auth/addprofile", ctrlProfile.profile);
router.get("/auth/getprofile/:id", ctrlProfile.getprofile);
router.put("/auth/updateQualification/:id", ctrlProfile.updateQualification);
router.put("/auth/updateJob/:id", ctrlProfile.updateJob);
router.put("/auth/updateWorksample/:id", ctrlProfile.updateWorksample);
router.put("/auth/updateProfile/:id", ctrlProfile.updateProfile);

//api Activity
router.post("/auth/AddPost", ctrlActivity.posts);
router.get("/auth/getposts/:title", ctrlActivity.getposts);
router.get("/auth/getpostBy/:id", ctrlActivity.getpostById);
router.patch("/auth/Addbidder/:id", ctrlActivity.addbidder);
router.put("/auth/UpdatePost/:id", ctrlActivity.Updatepost);
router.patch("/auth/Selectbidder/:id", ctrlActivity.SelectBidder);
router.patch("/auth/Confirmbidder/:id", ctrlActivity.ConfirmBidder);
router.patch("/auth/updatePay/:id", ctrlActivity.updatepaystatus);
router.patch("/auth/Removebidder/:id", ctrlActivity.removebidder);
router.delete("/auth/deletePostBy/:id", ctrlActivity.DeletePost);

//api Blog
router.post("/auth/Createblog", ctrlBlogs.Createblog);
router.post("/auth/addComment", ctrlBlogs.addcomment);
router.get("/auth/getblogs/:id", ctrlBlogs.getblogs);
router.get("/auth/getblogBy/:id", ctrlBlogs.getblogById);
router.put("/auth/updateBlog/:id",ctrlBlogs.Updateblog);
router.delete("/auth/deletePostBy/:id", ctrlBlogs.DeleteBlog);

//api Chat 
router.post('/auth/initiate', chatRoom.initiate)
router.post('/auth/:roomId/message', chatRoom.postMessage)
router.put('/auth/:roomId/mark-read', chatRoom.markConversationReadByRoomId);
router.get('/auth/:roomId', chatRoom.getConversationByRoomId)
router.delete("/auth/deleteBy/:roomId", chatRoom.deleteRoomById);
router.delete("/auth/deleteMessagesBy/:roomId", chatRoom.deleteMessageById);

module.exports = router;