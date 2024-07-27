import express from 'express';
//import {createScheme} from '../controllers/admin.js';
import { createFLW,deleteFLW, getAllFLW,myProfile} from '../controllers/admin.js';
import {createScheme,deleteScheme,getAllScheme,updateScheme} from '../controllers/admin.js';
// import {getAllApplication,getSingleApplication} from '../controllers/application.js';
import { isAuth , isAdmin} from '../middleware/isAuth.js';
import uploadFiles  from '../middleware/multer.js';
const router = express.Router();

router.post('/flw/new',isAuth,isAdmin,createFLW);
router.delete('/flw/:id',isAuth,isAdmin,deleteFLW);
router.get('/users',isAuth,isAdmin,getAllFLW);
router.get('/flw/myprofile',isAuth,isAdmin,myProfile);
router.post('/scheme/new',isAuth,isAdmin,createScheme);
router.delete('/scheme/:id',isAuth,isAdmin,deleteScheme);
router.get('/scheme',isAuth,isAdmin,getAllScheme);
router.put('/scheme/update/:id',isAuth,isAdmin,updateScheme);
// router.get('/flw/application',isAuth,isAdmin,getAllApplication);
// router.get('/flw/application/:id',isAuth,isAdmin,getSingleApplication);

export default router;