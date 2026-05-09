import express from 'express';
import {
  getByArea,
  getByPincode,
  getSuggestions
} from '../controllers/pincodeController.js';

const router = express.Router();

router.get('/pincode/:code', getByPincode);
router.get('/area/:name', getByArea);
router.get('/suggest', getSuggestions);

export default router;
