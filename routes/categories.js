// routes/categories.js
const categoriesRouter = require('express').Router();
const { checkAuth } = require("../middlewares/auth.js");
const {
  createCategory,
  findAllCategories ,
  findCategoryById,
  updateCategory,
  deleteCategory,
  checkIsCategoryExists,
  checkEmptyName,
  } = require("../middlewares/categories");
const {
  sendAllCategories,
  sendCategoryCreated,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
  } = require("../controllers/categories");


categoriesRouter.get("/categories", findAllCategories, sendAllCategories);
categoriesRouter.get("/games/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated,
  checkAuth
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  updateCategory,
  sendCategoryUpdated,
  checkAuth
);
categoriesRouter.delete(
  "/games/:id", 
  deleteCategory,
  sendCategoryDeleted,
  checkAuth
);
module.exports = categoriesRouter;