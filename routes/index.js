const { Router } = require("express");
const router = Router();
const controllers = require("../controllers");

router.get("/", (req, res) => {
  res.send("This is the root");
});

router.post("/plants", controllers.createPlant);

router.get("/plants", controllers.getAllPlants);

router.get("/plants/:id", controllers.getPlantByID);

router.put("/plants/:id", controllers.updatePlant);

router.delete("/plants/:id", controllers.deletePlant);

module.exports = router;
