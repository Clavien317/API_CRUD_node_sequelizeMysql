const { ajout, lister, modification, supprimer, rechercher } = require("../controller/EtudiantController")
const router = require("express").Router()




router.post("/api/ajout",ajout)
router.get("/api/liste",lister)
router.put("/api/modification/:id",modification)
router.delete("/api/supprimer/:id",supprimer)
router.get("/api/recherche/:val", rechercher);


module.exports = router