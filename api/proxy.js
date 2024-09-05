// api/proxy.js

import axios from 'axios';

export default async function handler(req, res) {
  const { method } = req;

  if (method === 'POST') {
    const { url, info } = req.body;

    try {
      const response = await axios.post(url, info);
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({
        message: 'Request forwarding failed',
        error: error.response ? error.response.data : 'Unknown error',
      });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}
