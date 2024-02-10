import axios from "axios";
import { Request , Response } from "express";

const JOB_URL = ''

export async function getJobs(req : Request, res: Response) {
    try {
        const response = await axios.get(JOB_URL);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function getJobById(req : Request, res: Response) {
    try {
        const response = await axios.get(JOB_URL + req.params.id);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function addJob(req : Request, res: Response) {
    try {
        const response = await axios.post(JOB_URL, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  
  export async function updateJob(req : Request, res: Response) {
    try {
        const response = await axios.put(JOB_URL + req.params.id, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function removeJob(req : Request, res: Response) {
    try {
        const response = await axios.delete(JOB_URL + req.params.id);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }