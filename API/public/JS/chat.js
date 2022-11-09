//Chatbox/bot
//Condiciones para colocar en le chat, se puede agregar mas o modificar lo armado
function getBotResponse(input) {
    if (input == "1") {
        return "Camiseta de argentina 20% de descuento";
    } else if (input == "2") {
        return "Tarjeta de credito en 3 cuotas sin interes";
    } else if (input == "3") {
        return "Las compras se pueden devolver con 5 dias habiles luego de recibirla. Debes contar con el recibo";
    } else if (input == "4") {
        return "En la parte inferior se encuentra la opcion de contacto";
    }
}

var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");

        var content =this.nextElementSibling;

        if (content.style.maxHeight){
            content.style.maxHeight = null;
        }else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

    });
}

function getTime() {
    let today = new Date();
    hours = today.getHours();
    minutes = today.getMinutes();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    let time = hours + ":" + minutes;
    return time;
}
//Mensaje que aparece al hacer click en el chat bot
function firstBotMessage() {
    let firstMessage = 
    'Hola en que te podemos ayudar?'+
    '\n1️⃣ Productos'+
    '\n2️⃣ Promociones bancarias'+
    '\n3️⃣ Devolución'+
    '\n4️⃣ Contactanos'
    document.getElementById("botStarterMessage").innerHTML = '<p class="botText"><span>' + firstMessage + '</span></p>';

    let time = getTime();

    $("#chat-timestamp").append(time);
    document.getElementById("userInput").scrollIntoView(false);

}

firstBotMessage();

function getHardResponse(userText) {
    let botResponse = getBotResponse(userText);
    let botHTML = '<p class="botText"><span>' + botResponse + '</span></p>';
    $("#chatbox").append(botHTML);

    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function getResponse() {
    let userText = $("#textInput").val();

    if (userText == "") {
        userText == "Let's shop at Tokyos!";
    }

    let userHTML = '<p class="userText"><span>' + userText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);

    setTimeout(() => {
        getHardResponse(userText);
    },2000)
}

function buttonSendText(sampleText) {
    let userHTML = '<p class="userText"><span>' + sampleText + '</span></p>';

    $("#textInput").val("");
    $("#chatbox").append(userHTML);
    document.getElementById("chat-bar-bottom").scrollIntoView(true);
}

function sendButton() {
    getResponse();
}

function heartButton() {
    buttonSendText("Loved!")
}


// Press enter to send a message
$("#textInput").keypress(function(e) {
    if(e.which == 13) {
        getResponse();
    }
});