import { Router } from 'express';

const router = Router();

/**
 *
 * Poll
 *
 */

router.get('/poll', (req, res) => {
  res.send("All polls");
});

router.get('/poll/:id', () => {});

router.post('/poll', () => {});

router.delete('/poll/:id', () => {});

export default router;
