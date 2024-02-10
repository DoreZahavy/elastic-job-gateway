import express from 'express';
import axios from 'axios';
const SEARCH_URL = '';
const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(SEARCH_URL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
export const searchRoutes = router;
