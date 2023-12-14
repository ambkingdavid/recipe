import { Router } from 'express';
import CategoryController from '../controllers/categoryController.js';
import ContinentController from '../controllers/continentalContoller.js';

const router = Router();

// HOMEPAGE - GET
router.get('/', (req, res) => {
    res.status(200).render('index', {
        title: 'Recipe Blog',
    });
});

// CATEGORY - GET
router.get('/category', CategoryController.getAllCategory);

// CONTINENT - GET
router.get('/continent', ContinentController.getAllContinent);

export default router;
