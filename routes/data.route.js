const router = require("express").Router();
const dataController = require("../controllers/dataContoller");

router.get("/", dataController.getData);

module.exports = router;