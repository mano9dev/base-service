import express, { Router } from 'express';
import authRoutes from "./auth.route"
const router: Router = express.Router();

interface IRoute {
  collection: string;
  route: Router;
}

const mappedRoutes: IRoute[] = [
  {
    collection: "/auth",
    route: authRoutes
  }
]

mappedRoutes.forEach(route => {
  router.use(route.collection, route.route)
})

export default router