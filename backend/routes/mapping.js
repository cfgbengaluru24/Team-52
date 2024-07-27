import express from 'express';
const router = express.Router();
import { getEligibleSchemes,getEligibleBeneficiaries } from '../controllers/ben_scheme.js';

router.get('/beneficiarymapscheme',getEligibleSchemes);
router.get('/beneficiarymapscheme/:id',getEligibleBeneficiaries);
export default router;