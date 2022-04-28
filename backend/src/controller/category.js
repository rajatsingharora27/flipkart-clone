const slugify = require('slugify');
const Category = require('../models/category');

function createCategories(categories,parentId=null){
    const categoryList=[];

    let category;
    if(parentId==null){
        //means the element in the document is the main category
        category= categories.filter(cat=>cat.parentId==undefined);
        //resturn the list of the parent category
    }
    else{
        //wheen parent id is not undefied then it will get the list of
        // all the categoy having which has same parent id
        category=categories.filter(cat=>cat.parentId==parentId);
    }

    //we have list that is category
    for(let cate of category){
        categoryList.push({
            _id:cate._id,
            name:cate.name,
            slug:cate.slug,
            parentId:cate.parentId,
            children:createCategories(categories,cate._id)
        })
    }
    return categoryList

}





module.exports.addCategory=(req, res) => {

    Category.findOne({ name: req.body.name })
        .exec((error, category) => {
            if (error) {
                return res.status(400).json({
                    message: 'category already exist',
                })
            }


            categoryObj = {
                name: req.body.name,
                slug: slugify(req.body.name),
            }
            if (req.body.parentId) {
                categoryObj.parentId = req.body.parentId;
            }
            const cat = new Category(categoryObj);

            cat.save((error, category) => {
                if (error) {
                    return res.status(400).json({
                        error
                    });
                }
                if (category) {
                    // console.log(category.parentId)
                    return res.status(201).json({
                        category
                    })
                }
            });

        });
};

module.exports.getCategory=(req,res)=>{

    Category.find({})
    .exec((error,category)=>{
        if(error){
          return  res.status(400).json({error})
        }
        if(category){

            const categoryList=createCategories(category);


            return res.status(200).json({categoryList});
        }
    });



}

