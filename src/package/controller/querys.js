
export const queries = {

    /** CATALOGOS () */
    getAllColonia: 'SELECT * FROM CColonia',
    getAllAlcaldia: 'SELECT * FROM CAlcaldia',
    getAllColonia_idAlcaldia: 'SELECT nombre_colonia FROM CColonia WHERE id_alcaldia = @id_alcaldia',


    getAlcaldia: 'SELECT id_alcaldia FROM CAlcaldia WHERE nombre_alcaldia = @nombre_alcaldia',
    insertDirrecion: 'INSERT INTO [dbo].[DDirrecion]'+
                    '(calle_dirrec'+
                    ',num_ext_dirrec'+
                    ',num_int_dirrec'+
                    'id_colonia)'+
                    'VALUES'+
                    '(@calle_dirrec'+
                    ',@num_ext_dirrec'+
                    ',@num_int_dirrec'+
                    ',@id_colonia)',

    updateDirrecion: 'UPDATE [dbo].[DDirrecion]'+
                    'SET [calle_dirrec] = @calle_dirrec'+
                    ',[num_ext_dirrec] = @num_ext_dirrec'+
                    ',[num_int_dirrec] = @num_int_dirrec'+
                    ',[id_colonia] = @id_colonia'+
                    'WHERE [id_dirrec] = @id_dirrec',

    getDirrecion: 'SELECT * FROM [dbo].[DDirrecion] WHERE id_dirrec = @id_dirrec ',                
    insertDCompra: 'INSERT INTO [dbo].[DCompra]'+
                    '([id_compra]'+
                    ',[id_producto]'+
                    ',[cantidad_dcompra]'+
                    ',[subtotal_dcompra])'+
               ' VALUES'+
                   ' (@id_compra'+
                   ' ,@id_producto'+
                    ',@cantidad_dcompra'+
                   ' ,@subtotal_dcompra)',

    getDCompra: 'SELECT * FROM [dbo].[DCompra] WHERE id_compra = @id_compra',
    insertUsuario: 'INSERT INTO [dbo].[MUsuario]'+
                    '([nombre_usuario]'+
                    ',[appat_usuario]'+
                    ',[apmat_usuario]'+
                    ',[fecNaci_usuario]'+
                    ',[tel_usuario]'+
                    ',[cel_usuario]'+
                    ',[user_usuario]'+
                    ',[pass_usuario]'+
                    ',[priv_usuario]'+
                    ',[id_dirrec])'+
                    'VALUES'+
                    '(@nombre_usuario'+
                    ',@appat_usuario'+
                    ',@apmat_usuario'+
                    ',@fecNaci_usuario'+
                    ',@tel_usuario'+
                    ',@cel_usuario'+
                    ',@user_usuario'+
                    ',@pass_usuario'+
                    ',@priv_usuario'+
                    ',@id_dirrec)',
    
    getUsuario: 'SELECT * FROM [dbo].[MUsuario] WHERE user_usuario = @user_usuario'+
                'AND pass_usuario = @pass_usuario',
    
    getIDDirrec: 'SELECT id_dirrec FROM [dbo].[MUsuario]'+
                 'WHERE id_usuario = @id_usuario',

    updateUsuario: 'UPDATE [dbo].[MUsuario]'+
                    'SET [nombre_usuario] = @nombre_usuario'+
                    ',[appat_usuario] = @appat_usuario'+
                    ',[apmat_usuario] = @apmat_usuario'+
                    ',[fecNaci_usuario] = @fecNaci_usuario'+
                    ',[tel_usuario] = @tel_usuario'+
                    ',[cel_usuario] = @cel_usuario'+
                    ',[user_usuario] = @user_usuario'+
                    ',[pass_usuario] = @pass_usuario'+
                    ',[priv_usuario] = @priv_usuario'+
                    ',[id_dirrec] = @id_dirrec'+
                    'WHERE [id_usuario] = @id_usuario',

    insertMCompra: 'INSERT INTO [dbo].[MCompra]'+
                    '([fechaPagado_compra]'+
                    ',[total_compra]'+
                    ',[completado]'+
                    ',[id_usuario])'+
                    'VALUES'+
                    '(@fechaPagado_compra'+
                    ',@total_compra'+
                    ',@completado'+
                    ',@id_usuario)',
    
    

}

export const dbsettings = {

    user: 'lasconchitasUser',
    password: 'Bo1i11@D6a7o#',
    server: 'lasconchitas.database.windows.net',
    database: 'LasConchitasBD',
    port: 1433,
    options: {
        encrypt: true, // for azure
    }


}

