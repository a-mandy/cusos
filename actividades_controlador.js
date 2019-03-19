'use strict';

const input_titulo = document.querySelector('#txt_nombre');
const input_desc = document.querySelector('#txt_informacion');
const boton_registrar = document.querySelector('#boton_registrar');

let validarBlancos = () =>{
    let error = false;

    if(input_titulo.value==''){
        error=true;
        input_titulo.classList.add('error_input');
    }else{
        input_titulo.classList.remove('error_input');
    }

    if(input_desc.value ==''){
        error=true;
        input_desc.classList.add('error_input');
    }else{
        input_desc.classList.remove('error_input');
    }

    return error;

};

let registrar_datos = () =>{
    if(validarBlancos()==false){
        let titulo = input_titulo.value;
        let descripcion = input_desc.value;
        registrar(titulo,descripcion);
        limpiarInputs(titulo,descripcion);
    }else{
        swal.fire({
            type:'warning',
            title:'No se pudo registrar :(',
            text: 'Por favor rellene los campos para poder guardar esta actividad'
        });
    }

};

let limpiarInputs= (ptitulo,pdescripcion) =>{
    
}

boton_registrar.addEventListener('click',registrar_datos);