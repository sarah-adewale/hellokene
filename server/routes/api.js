const express = require('express');
const router = express.Router();
const portfolioController = require('../controllers/portfolio');

// Get all portfolio projects
router.get('/portfolio', portfolioController.getPortfolioProjects);

// Get a specific portfolio project by ID or slug
router.get('/portfolio/:id', portfolioController.getPortfolioProject);

// You can add more API routes for other data as needed
// router.get('/about', aboutController.getAboutData);

module.exports = router;