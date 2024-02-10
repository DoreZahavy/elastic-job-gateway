import express from 'express';
import http from 'http';
import path from 'path';
import cors from 'cors';
const app = express();
const server = http.createServer(app);
// Express App Config
app.use(express.json());
app.use(express.static('public'));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')));
}
else {
    const corsOptions = {
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
            'http://127.0.0.1:5173',
            'http://localhost:5173'
        ],
        credentials: true
    };
    app.use(cors(corsOptions));
}
// Routes
import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.js';
app.all('*', setupAsyncLocalStorage);
import { centralRouter } from './routes/routes.js';
app.use('/api', centralRouter);
// Make every server-side-route to match the index.html
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'));
});
// Start the server
const port = Number(process.env.PORT) || 3030;
server.listen(port, () => {
    console.log('Server is running on port: ' + port);
});
