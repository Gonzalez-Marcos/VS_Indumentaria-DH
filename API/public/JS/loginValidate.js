const formulario = document.getElementById('formulario_login');
const inputs = document.querySelectorAll('input');

const expresiones = {
    email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,/*Esta expresión regular valida una contraseña fuerte que debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos.*/
    }
    const campos = {
        email: false,
        password: false
    }

    const validarFormulario = (e) => {
        switch(e.target.name){
            case "email":
                validarCampo(expresiones.email, e.target, 'email');
                
               
            break;

        // console.log('funciona');
    }
}

    const validarCampo = (expresion, input) => {
        if(expresion.test(input.value)){
    
            document.getElementById(`grupo_email`).classList.remove('formulario_grupoIncorrecto');
            document.getElementById(`grupo_email`).classList.add('formulario_grupoCorrecto');
            document.querySelector(`#grupo_email i`).classList.add('fa-check-circle');
            document.querySelector(`#grupo_email i`).classList.remove('fa-times-circle');
            document.querySelector(`#grupo_email .formulario_inputError`).classList.remove('formulario_inputError-activo');
            campos['grupo_email'] = true;
    
           } else {
            document.getElementById(`grupo_email`).classList.add('formulario_grupoIncorrecto');
            document.getElementById(`grupo_email`).classList.remove('formulario_grupoCorrecto');
            document.querySelector(`#grupo_email i`).classList.add('fa-times-circle');
            document.querySelector(`#grupo_email i`).classList.remove('fa-check-circle');
            document.querySelector(`#grupo_email .formulario_inputError`).classList.add('formulario_inputError-activo');
            campos['grupo_email'] = false;
           }
    };

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    
        // console.log('tecla levantada')
    });

    formulario.addEventListener('submit', (e) =>{
    
        e.preventDefault();
        
        if(campos.email && campos.password){
            
            
            document.getElementById('formulario_mensajeExito').classList.add('formulario_mensajeExitoActivo');
            
            
            setTimeout(() => {
                
                document.getElementById('formulario_mensajeExito').classList.remove('formulario_mensajeExitoActivo');
            }, 5000);
            
            
            document.querySelectorAll('.formulario_grupoCorrecto').forEach((icono) => {
                icono.classList.remove('formulario_grupoCorrecto');
                
            });
            
        }
        
        
        formulario.submit();
        
    })
    
























// window.onload = function () {

//     const form = document.getElementById('formulario_login');

//     form.addEventListener('submit', (e) => {

//         const errors = [];

//         const email = document.getElementById('email');
//         const password = document.getElementById('password');

//         if (email.value == '') {
//             errors.push('(*) Debe completar un usuario válido');
//             email.classList.add('is-invalid');
//         } else {
//             email.classList.add('is-valid');
//             email.classList.remove('is-invalid');
//             form.password.focus();
//         };

//         if (password.value == '') {
//             errors.push('(*) La contraseña no es válida');
//             password.classList.add('is-invalid');
//         } else {
//             password.classList.add('is-valid');
//             password.classList.remove('is-invalid');
            
//         };

//         if (errors.length > 0) {
//             e.preventDefault();
//             let ulErrors = document.querySelector('#emailError');
//             ulErrors.classList.add('alert-warning');
//             ulErrors.innerHTML = '';
//             for (let i = 0; i < errors.length; i++) {
//                 ulErrors.innerHTML +=  errors[i];
//             };
//         }else{
            
//             form.submit();
//         }
//     })





// }