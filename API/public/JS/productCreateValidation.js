window.onload = function(){
    let formulario = document.querySelector('#product-create');

    console.log("estoy aqui");

//------DESDE AQUÍ CONTINUE CON LAS VALIDACIONES DEL FORMULARIO -------//    
    let form = document.querySelector('.product-create');
    form.name.focus();

    
    form.addEventListener('submit', (e) => {
        
        let errors = [];

        let name = document.querySelector('#name');
        let image = document.querySelector('#image');
        let price = document.querySelector('#price');
        let category = document.querySelector('#category');
        let colour = document.querySelector('#colour');
        let sizes = document.querySelector('#sizes');
        let description = document.querySelector('#description');


        // name
        if (name.value == '') {
            errors.push('El campo titulo no puede estar vacío');
            name.classList.add('is-invalid');
        } else {
            name.classList.add('is-valid');
            name.classList.remove('is-invalid');
            // form.image.focus();
        };

        // image
        if (image.value = "") {
            errors.push('El campo calificación no puede ser menor a cero ni mayor a 10');
            image.classList.add('is-invalid');
        } else {
            image.classList.add('is-valid');
            image.classList.remove('is-invalid');
            // form.price.focus();
        };

        // price
        if (price.value <= 0 ) {
            errors.push('El campo premios no puede ser menor a cero');
            price.classList.add('is-invalid');
        } else {
            price.classList.add('is-valid');
            price.classList.remove('is-invalid');
            // form.category.focus();
        };

        // category
        if (category.value == "") {
            errors.push('El campo fecha de creación no puede estar vacio');
            category.classList.add('is-invalid');
        } else {
            category.classList.add('is-valid');
            category.classList.remove('is-invalid');
            form.colour.focus();
        };

        // colour
        if (colour.value = "") {
            errors.push('El campo duración no puede ser menor a 60 ni mayor a 360 minutos');
            colour.classList.add('is-invalid');
        } else {
            colour.classList.add('is-valid');
            colour.classList.remove('is-invalid');
            form.sizes.focus();
        };

        // sizes
        if (sizes.value == null) {
            errors.push('El campo género no puede estar vacío');
            sizes.classList.add('is-invalid');
        } else {
            sizes.classList.add('is-valid');
            sizes.classList.remove('is-invalid');
        };

        // descriptions
        if (description.value == '') {
            errors.push('El campo género no puede estar vacío');
            description.classList.add('is-invalid');
        } else {
            description.classList.add('is-valid');
            description.classList.remove('is-invalid');
        };
        
        //Aquí controlo que es lo que debo hacer si hay o no errores en el formulario

        if (errors.lenght > 0) {
            e.preventDefault();
            let ulErrors = document.querySelector('.errores');
            ulErrors.classList.add('alert-warning');
            ulErrors.innerHTML = '';
            for (let i = 0; i < errors.colour; i++) {
                ulErrors.innerHTML += "<li>" + errors[i] + "</li>";
            };
        }else{
            alert('La validación fué exitosa')
            form.submit();
        }

    });


}