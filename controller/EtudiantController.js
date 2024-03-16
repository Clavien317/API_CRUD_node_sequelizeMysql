const etudiant = require("../model/connextion")
const connexion = require("../model/connextion")


const ajout = async(req,res)=>
{
    const result = await connexion.create(req.body)
    res.status(200).json({result:result,Message:"Insered successful"})
}


const lister =async(req,res)=>
{
    const result = await connexion.findAll()
    res.status(200).json(result)
}

//si on veut peut etre rechercher de donnees avec colonne precis et mettre le donnees en parametre url
const rechercher = async (req, res) => {
    try {
        const val = req.params.val
        const result = await connexion.findOne({ where: { nom: val } })
        if (!result) {
            return res.status(404).json({ message: "Aucun résultat trouvé." })
        }
        res.status(200).json(result);
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        res.status(500).json({ message: "Erreur lors de la recherche." });
    }
};

const modification =async(req,res)=>
{
    const id = req.params.id
    const user = await etudiant.findByPk(id)
    const result = await user.update(req.body)
    res.status(200).json({result:result,Message:"updated successful"})
}

const supprimer=async(req,res)=>
{
    const id = req.params.id
    const user = await etudiant.findByPk(id)
    const result = await user.destroy()
    res.status(200).json({result:result,Message:"deleted successful"})
}




module.exports = {ajout,lister,modification,supprimer,rechercher}