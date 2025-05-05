import { CategoryModel } from "../model/category.js";
import { Usermodel } from "../model/user.js";

export const createCategory = async (req, res) => {
  const { name } = req.body;

  try {
    const categoryName = await CategoryModel.create({
      name: name,
    });

    res
      .status(200)
      .send({
        success: true,
        categoryName: categoryName,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};

export const getCategory = async (_, res) => {
  try {
    const category = await CategoryModel.find();
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};

export const getCategoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await CategoryModel.findById(id);
    return res
      .status(200)
      .send({
        success: true,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error, "err");
    return res
      .status(400)
      .send({
        success: false,
        massage: error,
      })
      .end();
  }
};
export const updateCategory = async (req, res) => {
  const { id, categoryName } = req.body;

  try {
    const categories = await CategoryModel.findById(id);
    if (!categories) {
      return res.status(404).send({
        success: false,
        message: "Category not found.",
      });
    }

    if (categoryName !== undefined) categories.categoryName = categoryName;

    await categories.save();

    return res.status(200).send({
      success: true,
      message: "Category updated successfully.",
      categories,
    });
  } catch (error) {
    console.log(error, "UPDATE ERROR");
    return res.status(400).send({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCategory = async (req, res) => {
  const { id } = req.params;
  const categorys = await CategoryModel.findByIdAndDelete(id);
  res
    .status(200)
    .send({
      success: true,
      massage: "removed",
    })
    .end();
};
