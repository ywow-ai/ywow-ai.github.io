// src/routes/api/[...slugs]/+server.ts
import { Elysia, t } from 'elysia';

const app = new Elysia({ prefix: '/api' }).get('/', () => 'hi');

type RequestHandler = (v: { request: Request }) => Response | Promise<Response>;

export const GET: RequestHandler = ({ request }) => app.handle(request);
export const POST: RequestHandler = ({ request }) => app.handle(request);
