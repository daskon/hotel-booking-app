import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('users endpoint');
});

export default router