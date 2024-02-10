import express from 'express';
import axios from 'axios';
const JOB_URL = '';
const router = express.Router();
router.get('/', async (req, res) => {
    try {
        const response = await axios.get(JOB_URL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.get('/:id', async (req, res) => {
    try {
        const response = await axios.get(JOB_URL + req.params.id);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.post('/', async (req, res) => {
    try {
        const response = await axios.post(JOB_URL, req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.put('/:id', async (req, res) => {
    try {
        const response = await axios.put(JOB_URL + req.params.id, req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
router.delete('/:id', async (req, res) => {
    try {
        const response = await axios.delete(JOB_URL + req.params.id);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
});
export const jobRouter = router;
