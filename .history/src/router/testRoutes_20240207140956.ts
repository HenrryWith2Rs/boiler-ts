// router/testRouter.ts
import express, { Router } from 'express';
import { testGet, testPost } from '../controllers/testController';

export default (router: Router) => {
  router.get('/testGet', testGet);
  router.post('/testPost', testPost);
};
