'use strict';


let registrar = (ptitulo, pdescripcion) =>{
    let request = $.ajax({
        url:"http:localhost:4000/api/registrar_actividad",
        method: "POST",
        data:{
            titulo: ptitulo,
            descripcion: pdescripcion

        },
        contentType: 'application/x-www-form-urlencoded; charset= UTF-8',
        dataType :"json"
    });
    request.done(function(msg){
        swal.fire({
            type: 'success',
            title: 'Noticia agregada correctamente',
            text:`La actividad: ${ptitulo} ha sido agregada correctamente`
        });
    });

    request.fail();

};