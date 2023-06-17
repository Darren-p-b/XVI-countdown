var express = require("express");
var router = express.Router();
const multer = require("multer");

const fs = require("fs");
const path = require("path");

if (!fs.existsSync("uploads/")) {
  fs.mkdirSync("uploads/");
}

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const name = file.fieldname + "-" + Date.now();
    cb(null, name + ext);
  },
});

const upload = multer({ storage });

/* POST upload file. */
router.post("/", upload.single("file"), (req, res) => {
  if (req.file) {
    // File upload was successful
    res.json({
      success: true,
      payload: `http://localhost:8080/uploads/${req.file.filename}`,
    });
  } else {
    // No file was uploaded or an error occurred
    if (req.fileValidationError) {
      // Invalid file type
      res.status(400).send("Invalid file type!");
    } else if (req.fileSizeError) {
      // File is too large
      res.status(400).send("File is too large!");
    } else {
      // Other error occurred
      res.status(500).send("File upload error!");
    }
  }
});
