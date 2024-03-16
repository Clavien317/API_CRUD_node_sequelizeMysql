const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize("tp", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

try {
    sequelize.authenticate();
    console.log("Connected successful");
} catch (e) {
    console.log("No connected", e);
}

const Etudiant = sequelize.define("etudiant", {
    matricule: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    niveau: {
        type: DataTypes.STRING,
        allowNull: false
    },
    parcours: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    try {
        await sequelize.sync({ force: false, alter: true });
        console.log("Tables created successfully.");
    } catch (error) {
        console.error("Error synchronizing tables:", error);
    }
})();

module.exports = Etudiant;
