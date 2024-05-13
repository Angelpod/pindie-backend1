// routes/categories.js
const categoriesRouter = require('express').Router();

const createCategory = require('../controllers/categories');
const sendCategoryCreated = require('../middlewares/categories');
const findAllCategories = require('../middlewares/categories');
const findCategoryById = require('../middlewares/categories');
const sendCategoryById = require('../controllers/categories');
const updateCategory = require('../middlewares/categories');
const sendCategoryUpdated = require('../controllers/categories');
const deleteCategory = require('../middlewares/categories');
const sendCategoryDeleted = require('../controllers/categories');
const checkIsCategoryExists = require('../middlewares/categories');
const checkEmptyName = require('../middlewares/categories');
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  createCategory,
  sendCategoryCreated
);
categoriesRouter.get("/categories/:id", findCategoryById , sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/games/:id", 
  deleteCategory,
  sendCategoryDeleted
);
module.exports = categoriesRouter;