const express = require('express')
const bodyparser = require('body-parser');
const ProductRoute = require('./routes/ProductRoute')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: './upload/images',
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
  })
  
  const upload = multer({
    storage: storage,
  })
  


const app = express();
app.use(bodyparser.json());

app.use('/images', express.static('upload/images'));

app.use("/api/erp",ProductRoute)

app.post("/api/upload", upload.single('image'), (req, res) => {

    res.json({
        success: 1,
        image_url: req.file.filename
    })
})



app.listen(process.env.PORT || 5000, () => console.log("server listening at 5000")); 