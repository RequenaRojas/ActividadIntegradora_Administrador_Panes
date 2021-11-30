import {initConnection, closeConnection } from "../package/controller/connection.js";
import { getColonias_model } from "../package/model/Modelo.js";


export const RegistroUsuario = async (req, res) => {
    const pool = await initConnection();
    const valuesCombobox = await  getColonias_model(pool);

    await closeConnection(pool);
    return valuesCombobox;

}