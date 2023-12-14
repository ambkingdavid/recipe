import categoryModel from "../models/category.model.js";


class CategoryController {
    static async getAllCategory(req, res) {
        const categories = continentModel.find().lean();

        res.status(200).render('continent', {
            categories,
        })
    }
}

export default CategoryController;
