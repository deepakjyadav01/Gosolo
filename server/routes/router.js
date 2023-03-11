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
router.get("/auth/checkemail/:email",ctrlUser.getemail);
router.post('/auth/login', ctrlUser.login);
router.post("/auth/refreshtoken", ctrlUser.refreshToken);
router.put("/auth/UpdateUserById", [auth.verifyToken] , ctrlUser.updatereg)
router.patch("/auth/forgotpassword" , ctrlUser.forgotpass);
router.patch("/auth/addprofileID",[auth.verifyToken] , ctrlUser.addprofileID)
router.delete("/auth/RemoveUser" , [auth.verifyToken], ctrlUser.RemoveUser);

//api/ image uploads 
router.post("/auth/upload", [auth.verifyToken], upload.single('file') , ctrlUpload.uploadFile );
router.post("/auth/getImage",[auth.verifyToken] ,ctrlUpload.getImagesById);
router.delete("/auth/deleteImage",[auth.verifyToken] ,ctrlUpload.DeleteImage);

//api profile 
router.post("/auth/addqualifications",[auth.verifyToken], ctrlProfile.qualifications);
router.post("/auth/addjob",[auth.verifyToken], ctrlProfile.job);
router.post("/auth/addworksample",[auth.verifyToken], ctrlProfile.work);
router.post("/auth/addprofile",[auth.verifyToken], ctrlProfile.profile);
router.get("/auth/getprofile/:id",[auth.verifyToken], ctrlProfile.getprofile);
router.post("/auth/getqualification",[auth.verifyToken], ctrlProfile.getquali);
router.post("/auth/getjob",[auth.verifyToken], ctrlProfile.getjob);
router.post("/auth/getwork",[auth.verifyToken], ctrlProfile.getwork);
router.put("/auth/updateQualification/:id",[auth.verifyToken], ctrlProfile.updateQualification);
router.put("/auth/updateJob/:id",[auth.verifyToken], ctrlProfile.updateJob);
router.put("/auth/updateWorksample/:id",[auth.verifyToken], ctrlProfile.updateWorksample);
router.put("/auth/updateProfile/:id",[auth.verifyToken], ctrlProfile.updateProfile);

//api Activity
router.post("/auth/AddPost",[auth.verifyToken], ctrlActivity.posts);
router.get("/auth/getposts",[auth.verifyToken], ctrlActivity.getposts);
router.get("/auth/getpostBy/:id",[auth.verifyToken], ctrlActivity.getpostById);
router.patch("/auth/Addbidder/:id",[auth.verifyToken], ctrlActivity.addbidder);
router.put("/auth/UpdatePost/:id",[auth.verifyToken], ctrlActivity.Updatepost);
router.patch("/auth/Selectbidder/:id",[auth.verifyToken], ctrlActivity.SelectBidder);
router.patch("/auth/Confirmbidder/:id",[auth.verifyToken], ctrlActivity.ConfirmBidder);
router.patch("/auth/updatePay/:id",[auth.verifyToken], ctrlActivity.updatepaystatus);
router.patch("/auth/Removebidder/:id",[auth.verifyToken], ctrlActivity.removebidder);
router.delete("/auth/deletePostBy/:id",[auth.verifyToken], ctrlActivity.DeletePost);

//api Blog
router.post("/auth/Createblog", [auth.verifyToken], ctrlBlogs.Createblog);
router.post("/auth/addbody", [auth.verifyToken], ctrlBlogs.addbody);
router.post("/auth/addComment" , [auth.verifyToken], ctrlBlogs.addcomment);
router.get("/auth/getblogs/:title" , [auth.verifyToken], ctrlBlogs.getblogs);
router.get("/auth/getblogBy/:id", [auth.verifyToken], ctrlBlogs.getblogById);
router.put("/auth/updateBlog/:id", [auth.verifyToken],ctrlBlogs.Updateblog);
router.put("/auth/updateBlogbody/:id", [auth.verifyToken],ctrlBlogs.Updateblogbody);
router.delete("/auth/deleteBlogBy/:id", [auth.verifyToken], ctrlBlogs.DeleteBlog);

//api Chat 
router.post('/auth/initiate',[auth.verifyToken], chatRoom.initiate)
router.post('/auth/:roomId/message',[auth.verifyToken], chatRoom.postMessage)
router.put('/auth/:roomId/mark-read',[auth.verifyToken], chatRoom.markConversationReadByRoomId);
router.get('/auth/:roomId',[auth.verifyToken], chatRoom.getConversationByRoomId)
router.delete("/auth/deleteBy/:roomId",[auth.verifyToken], chatRoom.deleteRoomById);
router.delete("/auth/deleteMessagesBy/:messageId",[auth.verifyToken], chatRoom.deleteMessageById);

module.exports = router;