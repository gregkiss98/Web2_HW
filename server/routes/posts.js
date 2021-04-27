import express from 'express';
import { getPosts, createPost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts); //ezek amúgy itt végpontok lesznek
router.get('/', createPost);

export default router;