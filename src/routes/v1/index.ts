import express from 'express';

const router = express.Router();

router.use('/health', (req, res, next) => {
  res.json(200);
});

export default router;
