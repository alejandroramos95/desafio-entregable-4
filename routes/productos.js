const { Router } = require('express');
const router = Router();

router.get("/productos", async (req, res) => {
    res.send("hola");
})

module.exports = router;