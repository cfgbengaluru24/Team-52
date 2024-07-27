import express from 'express';
import {createBeneficiary, getAllBeneficiary, createApplication, getAllApplication, updateApplication} from '../controllers/flw.js';
//import { createFLW,deleteFLW, getAllFLW,myProfile} from '../controllers/admin.js';
import { myProfile } from '../controllers/admin.js';

// import {createScheme,deleteScheme,getAllScheme,updateScheme} from '../controllers/scheme.js';
// import {getAllApplication,getSingleApplication} from '../controllers/application.js';
import { isAuth , isAdmin} from '../middleware/isAuth.js';
import uploadFiles  from '../middleware/multer.js';
const router = express.Router();

router.post('/flw/beneficiary/new', isAuth, createBeneficiary);
router.post('/flw/application/new', isAuth, createApplication);

router.get('/flw/profile', isAuth, myProfile);
router.get('/flw/beneficiary/all', isAuth, getAllBeneficiary);
router.get('/flw/application/all', isAuth,  getAllApplication);
router.put('/flw/application/update', isAuth, updateApplication);
export default router;