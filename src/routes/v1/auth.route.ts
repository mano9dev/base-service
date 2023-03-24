import AuthController from '../../modules/auth/auth.controller';
import express, { Router } from 'express';
import Container from 'typedi';

const router: Router = express.Router();

const authController = Container.get(AuthController)

router.get("/", authController.find)

export default router;