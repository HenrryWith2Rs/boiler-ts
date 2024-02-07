// router/index.ts
import { Router } from 'express';
import testRoutes from './testRoutes';
const router = Router();

export default (): Router => {
  testRouter();
};
