const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.sequelize.Op;

const Categories = db.Category;

const apiCategoryController = {
    all: async (req, res) => {
        try {
            const categories = await Categories.findAll();

            const showAllCategories = (categories) => {
                let allCategories = [];
                
                for (let i = 0; i < categories.length; i++) {
                    const category = categories[i];
                    
                    const categoryDetail = {
                        id: category.id,
                        name: category.name,                       
                        detail: "http://localhost:8080/api/category/" + category.id
                    };
                    allCategories.push(categoryDetail);
                    
                }
                return allCategories;
            }           


            // const categories = await categories.findAll({
            //     attributes: {
            //         include: [
            //             [sequelize.fn('COUNT', sequelize.col('category_id'), 'eventCount')]
            //         ]
            //     },
            //     include: [
            //         {
            //             model: Categories,
            //             attributes: attributes
            //         }
            //     ],
            //     group: ['categories.id']
            // });

            return res.json({
                total: categories.length,
                categories: showAllCategories(categories)
                
            });

        } catch (error) {
            res.send(error)
        }
    }
}
module.exports = apiCategoryController;