import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('rooms endpoint');
});

export default router