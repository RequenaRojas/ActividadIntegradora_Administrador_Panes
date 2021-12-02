export const RegistroUsuario = async (req, res) => {
    var pool = null;
    try{
        pool = await initConnection();
    }catch(err){console.log(err);}
    
    var  valuesCombobox = null;
    try{
        valuesCombobox = await  getAllColAldias(pool);
    }catch(err){console.log(err)};
    

    await closeConnection(pool);
    return valuesCombobox;

}