
const conn = require('../config/database')

exports.getAllCategory = (req, res, next) => {
    conn.query("SELECT * FROM category", function (err, data, fields) {
      if(err) return next(new AppError(err))
      res.status(200).json({
        status: "success",
        length: data?.length,
        data: data,
      });
    });
   };

   exports.createCategory = (req, res) => {
    const values = [
        req.body.category_name, 
        req.body.category_image,
        req.body.is_deleted
    ];
    conn.query(
      "INSERT INTO category (category_name,category_image,is_deleted) VALUES(?)",
      [values],
      function (err, data, fields) {
        if (err) res.status(501).json({
            status:"failed",
            message:"Something went wrong!"
        });
        res.status(201).json({
          status: "success",
          message: "Category created!",
        });
      }
    );
   };