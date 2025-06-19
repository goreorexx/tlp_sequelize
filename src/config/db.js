import sequelize from "./database.js";

const initDB = async () => {
    try {

        await sequelize.authenticate();
        console.log("Conexión a BD con éxito");
        await sequelize.sync();

    } catch (error) {
        console.log("error al conectar a la base de datos");
    }
};

export default initDB;