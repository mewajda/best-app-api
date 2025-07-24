import { handle } from 'hono/vercel';
import { Hono } from 'hono';

const app = new Hono().basePath('/api');

app.get('/health', (c) => {
    return c.json({
        message: 'OK'
    });
});

app.get('/items', (c) => {
    return c.json({
        message: 'Hello Hono!',
        items: [
            {
                id: 1,
                name: 'Item 1'
            },
            {
                id: 2,
                name: 'Item 2'
            }
        ]
    });
});

const handler = handle(app);

export const GET = handler;
export const POST = handler;
