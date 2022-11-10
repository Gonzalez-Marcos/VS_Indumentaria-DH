const iconEye = document.querySelector('.icon-eye2');

const inputPass = document.getElementById('password')

const click = false;

iconEye.addEventListener('click', () => {
    
// console.log(icon)
    if(inputPass.type == "password"){

        inputPass.type = "text";

        iconEye.classList.remove('fa-eye-slash');
        iconEye.classList.add('fa-eye');

    }else {
        
        inputPass.type = "password";

        iconEye.classList.remove('fa-eye');
        iconEye.classList.add('fa-eye-slash');
    }
})