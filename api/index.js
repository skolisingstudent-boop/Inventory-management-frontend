import app from '../backend/index.js';

export default async function handler(req, res) {
  // Forward the incoming request to the Express app
  return app(req, res);
}
