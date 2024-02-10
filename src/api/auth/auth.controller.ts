import axios from "axios";
import { Request, Response } from "express";

const AUTH_URL = ''


export async function login(req: Request, res: Response) {
    try {
        const response = await axios.post(AUTH_URL + '/login', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}
export async function signup(req: Request, res: Response) {
    try {
        const response = await axios.post(AUTH_URL + '/signup', req.body);
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}


export async function logout(req: Request, res: Response) {
    try {
        const response = await axios.post(AUTH_URL + '/logout');
        res.json(response.data);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal Server Error');
    }
}