import { serve } from '@hono/node-server';
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

serve(
    {
        fetch: app.fetch,
        port: process.env.PORT ? parseInt(process.env.PORT) : 3000
    },
    (info) => {
        console.log(`Server is running on http://localhost:${info.port}`);
    }
);
