const formulario = document.getElementById('formulario_registro');
const inputs = document.querySelectorAll('input');

const expresiones = {
name : /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{4,20}$/,/*Esta expresión regular valida una cadena de solo letras minúsculas, letras mayúsculas, incluye tildes pero con espacios incluido*/
last_name : /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{4,20}$/,
// gender :,
phone : /^\d{7,14}$/, // 7 a 14 numeros.
email : /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
// confirm_email : ,
password : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,/*Esta expresión regular valida una contraseña fuerte que debe tener una letra minúscula, una letra mayúscula, un número, un carácter especial y mínimo 8 dígitos.*/
// confirm_password : document.querySelector('#confirm_password'),
// interests : document.querySelector('#interests'),
image : /.*(png|jpg|jpeg|gif)$/
}

const campos = {
    name: false,
    last_name: false,
    gender: false,
    phone: false,
    email: false,
    confirm_email: false,
    password: false,
    confirm_password: false,
    image: false
}

const validarFormulario = (e) =>{
    switch(e.target.name){
        case "name":
          validarCampo(expresiones.name, e.target, 'name');
        break;

        case "last_name":
           validarCampo(expresiones.last_name, e.target, 'last_name');
        break;
        
        case "phone":
            validarCampo(expresiones.phone, e.target, 'phone');
           
        break;
        
        case "email":
            validarCampo(expresiones.email, e.target, 'email');
            validarEmail();
           
        break;
        
        case "confirm_email":
            validarEmail();
           
        break;
        
        case "password":
            validarCampo(expresiones.password, e.target, 'password');
            validarPassword();
    
        break;
        
        case "confirm_password":
            validarPassword();
           
        break;

        case "gender":
            validarGender(e.target, 'gender')
           
        break;
        
        case "image":
            validarCampo(expresiones.image, e.target, 'image')
           
        break;
    }
    // console.log('funciona');
}

const validarGender = () => {

    const gender = document.getElementById('gender');

    if(gender == null || gender == 0){
        document.getElementById(`grupo_gender`).classList.remove('formulario_grupoIncorrecto');
        document.getElementById(`grupo_gender`).classList.add('formulario_grupoCorrecto');
        document.querySelector(`#grupo_gender i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_gender i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_gender .formulario_inputError`).classList.remove('formulario_inputError-activo');
        campos['gender'] = false;

       } else {
        document.getElementById(`grupo_gender`).classList.add('formulario_grupoIncorrecto');
        document.getElementById(`grupo_gender`).classList.remove('formulario_grupoCorrecto');
        document.querySelector(`#grupo_gender i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_gender i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_gender .formulario_inputError`).classList.add('formulario_inputError-activo');
        campos['gender'] = true;
    }
}

const validarCampo = (expresion, input, campo) => {
    if(expresion.test(input.value)){

        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupoIncorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupoCorrecto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_${campo} .formulario_inputError`).classList.remove('formulario_inputError-activo');
        campos[campo] = true;

       } else {
        document.getElementById(`grupo_${campo}`).classList.add('formulario_grupoIncorrecto');
        document.getElementById(`grupo_${campo}`).classList.remove('formulario_grupoCorrecto');
        document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_${campo} .formulario_inputError`).classList.add('formulario_inputError-activo');
        campos[campo] = false;
       }
}

const validarPassword = () => {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm_password');

    if(password.value !== confirmPassword.value){
        document.getElementById(`grupo_confirm_password`).classList.add('formulario_grupoIncorrecto');
        document.getElementById(`grupo_confirm_password`).classList.remove('formulario_grupoCorrecto');
        document.querySelector(`#grupo_confirm_password i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo_confirm_password i`).classList.remove('fa-check-circle');
        document.querySelector(`#grupo_confirm_password .formulario_inputError`).classList.add('formulario_inputError-activo');
        campos['password'] = false;
    } else {
        document.getElementById(`grupo_confirm_password`).classList.remove('formulario_grupoIncorrecto');
        document.getElementById(`grupo_confirm_password`).classList.add('formulario_grupoCorrecto');
        document.querySelector(`#grupo_confirm_password i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo_confirm_password i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo_confirm_password .formulario_inputError`).classList.remove('formulario_inputError-activo');
        campos['password'] = true;

    }

}

const validarEmail = () => {
    const email = document.getElementById('email');
    const confirmEmail = document.getElementById('confirm_email');

    if(email.value !== confirmEmail.value){
        document.getElementById('grupo_confirm_email').classList.add('formulario_grupoIncorrecto');
        document.getElementById('grupo_confirm_email').classList.remove('formulario_grupoCorrecto');
        document.querySelector('#grupo_confirm_email i').classList.add('fa-times-circle');
        document.querySelector('#grupo_confirm_email i').classList.remove('fa-check-circle');
        document.querySelector('#grupo_confirm_email .formulario_inputError').classList.add('formulario_inputError-activo');
        campos['confirm_email'] = false;
    } else {
        document.getElementById('grupo_confirm_email').classList.remove('formulario_grupoIncorrecto');
        document.getElementById('grupo_confirm_email').classList.add('formulario_grupoCorrecto');
        document.querySelector('#grupo_confirm_email i').classList.remove('fa-times-circle');
        document.querySelector('#grupo_confirm_email i').classList.add('fa-check-circle');
        document.querySelector('#grupo_confirm_email .formulario_inputError').classList.remove('formulario_inputError-activo');
        campos['confirm_email'] = true;

    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

    // console.log('tecla levantada')
})

formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
    
    const terminos = document.getElementById('terminos');
    
    if(campos.name && campos.last_name && campos.gender && campos.phone && campos.email && campos.password && campos.image && terminos.checked){

        formulario.reset();
        
        
        
    } else {
        document.getElementById('formulario_mensaje').classList.add('formulario_mensajeActivo')
        setTimeout(() => {
            
            document.getElementById('formulario_mensaje').classList.remove('formulario_mensajeActivo');
        }, 6000);
    }
    
    formulario.submit();
})