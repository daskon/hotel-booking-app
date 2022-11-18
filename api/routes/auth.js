import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('auth endpoint');
});

export default router