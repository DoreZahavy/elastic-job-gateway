import axios from "axios";
import { Request , Response } from "express";

const USER_URL = ''

export async function getUsers(req : Request, res: Response) {
    try {
        const response = await axios.get(USER_URL);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function getUserById(req : Request, res: Response) {
    try {
        const response = await axios.get(USER_URL + req.params.id);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function addUser(req : Request, res: Response) {
    try {
        const response = await axios.post(USER_URL, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  
  export async function updateUser(req : Request, res: Response) {
    try {
        const response = await axios.put(USER_URL + req.params.id, req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }
  
  export async function removeUser(req : Request, res: Response) {
    try {
        const response = await axios.delete(USER_URL + req.params.id);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
  }