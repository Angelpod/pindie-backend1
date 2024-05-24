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
categoriesRouter.get("/categories/:id", findCategoryById, sendCategoryById);
categoriesRouter.post(
  "/categories",
  findAllCategories,
  checkEmptyName,
  checkIsCategoryExists,
  checkAuth,
  createCategory,
  sendCategoryCreated
);

categoriesRouter.put(
  "/categories/:id",
  checkEmptyName,
  checkAuth,
  updateCategory,
  sendCategoryUpdated
);
categoriesRouter.delete(
  "/categories/:id", 
  deleteCategory,
  sendCategoryDeleted,
  checkAuth
);
module.exports = categoriesRouter;