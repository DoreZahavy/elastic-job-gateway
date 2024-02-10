import axios from "axios";
const JOB_URL = '';
export async function getJobs(req, res) {
    try {
        const response = await axios.get(JOB_URL);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
export async function getJobById(req, res) {
    try {
        const response = await axios.get(JOB_URL + req.params.id);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
export async function addJob(req, res) {
    try {
        const response = await axios.post(JOB_URL, req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
export async function updateJob(req, res) {
    try {
        const response = await axios.put(JOB_URL + req.params.id, req.body);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
export async function removeJob(req, res) {
    try {
        const response = await axios.delete(JOB_URL + req.params.id);
        res.json(response.data);
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
