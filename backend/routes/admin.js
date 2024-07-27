import express from 'express';
import {createFLW} from '../controllers/admin.js';
//import { createFLW,deleteFLW, getAllFLW,myProfile} from '../controllers/admin.js';

// import {createScheme,deleteScheme,getAllScheme,updateScheme} from '../controllers/scheme.js';
// import {getAllApplication,getSingleApplication} from '../controllers/application.js';
import { isAuth , isAdmin} from '../middleware/isAuth.js';
import uploadFiles  from '../middleware/multer.js';
const router = express.Router();

router.post('/flw/new',isAuth,isAdmin,createFLW);
// router.delete('/flw/:id',isAuth,isAdmin,deleteFLW);
// router.get('/users',isAuth,isAdmin,getAllFLW);
// router.get('/flw/myprofile',isAuth,isAdmin,myProfile);
// router.get('/flw/scheme/new',isAuth,isAdmin,createScheme);
// router.delete('/flw/scheme/:id',isAuth,isAdmin,deleteScheme);
// router.get('/flw/scheme',isAuth,isAdmin,getAllScheme);
// router.put('/flw/scheme/:id',isAuth,isAdmin,updateScheme);
// router.get('/flw/application',isAuth,isAdmin,getAllApplication);
// router.get('/flw/application/:id',isAuth,isAdmin,getSingleApplication);

export default router;