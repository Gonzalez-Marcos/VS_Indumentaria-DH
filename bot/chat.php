<?php
include "Bot.php";
$bot = new Bot;
$questions = [
    //que es covid
    "que es covid?" => "La enfermedad por coronavirus (COVID 19) es una ‎enfermedad infecciosa causada por un ‎coronavirus recientemente descubierto.",
    "coronavirus?" => "Los coronavirus son una extensa familia de virus que pueden causar enfermedades tanto en animales como en humanos.",
    "covid 19?" => "La enfermedad del coronavirus 2019 (COVID-19) es una enfermedad respiratoria que puede transmitirse de persona a persona.",
    //sintomas
    "sintomas por la enfermedad?" =>"Sintomas graves causador por covid son dificultad para respirar o sensación de falta de aire, Dolor o presión en el pecho, Incapacidad para hablar o moverse.",
    "sintomas por covid?" =>"Sintomas comunes causados por covid Fiebre, Tos seca y Cansancio." ,
    "sintomas por covid 19?" =>"Sintomas inusiales Diarrea, Conjuntivitis, Dolor de cabeza, Pérdida del sentido del olfato o del gusto, Erupciones cutáneas o pérdida del color en los dedos de las manos o de los pies.",
    
    //apariciones
      "cuando aparecen los síntomas" => "El período de incubación es el tiempo que transcurre entre la infección por el virus y la aparición de los síntomas de la enfermedad. La mayoría de las estimaciones respecto al periodo de incubación de la COVID-19 oscilan entre 1 y 14 días, y en general se sitúan en torno a 5-6 días.",
      "apariciones de sintomas?" => "El período de incubación es el tiempo que transcurre entre la infección por el virus y la aparición de los síntomas de la enfermedad. La mayoría de las estimaciones respecto al periodo de incubación de la COVID-19 oscilan entre 1 y 14 días, y en general se sitúan en torno a 5-6 días.",
      "en cuantos dias aparecen los sintomas?" => "El período de incubación es el tiempo que transcurre entre la infección por el virus y la aparición de los síntomas de la enfermedad. La mayoría de las estimaciones respecto al periodo de incubación de la COVID-19 oscilan entre 1 y 14 días, y en general se sitúan en torno a 5-6 días.",


    //duracion

    "cuanto duran los sintomas?" => "El tiempo medio desde el inicio de los síntomas hasta la recuperación es de 2 semanas cuando la enfermedad ha sido leve y 3-6 semanas cuando ha sido grave o crítica.",
    "duracion de sintomas" => "El tiempo medio desde el inicio de los síntomas hasta la recuperación es de 2 semanas cuando la enfermedad ha sido leve y 3-6 semanas cuando ha sido grave o crítica.",
    "recuperacion covid?" => "El tiempo medio desde el inicio de los síntomas hasta la recuperación es de 2 semanas cuando la enfermedad ha sido leve y 3-6 semanas cuando ha sido grave o crítica.",

    //vulnerables

    "personas que corren mas riesgo?" => "Los principales grupos vulnerables son los mayores de 60 años, hipertensión arterial, diabetes, enfermedades cardiovasculares, enfermedades pulmonares crónicas, cáncer, inmunodeficiencias, y el embarazo por el principio de precaución.",
    "personas en peligros?" => "Los principales grupos vulnerables son los mayores de 60 años, hipertensión arterial, diabetes, enfermedades cardiovasculares, enfermedades pulmonares crónicas, cáncer, inmunodeficiencias, y el embarazo por el principio de precaución.",
    "personas vulnerables?" => "Los principales grupos vulnerables son los mayores de 60 años, hipertensión arterial, diabetes, enfermedades cardiovasculares, enfermedades pulmonares crónicas, cáncer, inmunodeficiencias, y el embarazo por el principio de precaución.",

    //transmision


    "como se transmite el coronavirus?" => "La transmisión es por contacto estrecho con las secreciones respiratorias que se generan con la tos o el estornudo de una persona enferma.",
    "como se transmite el covid?" => "La transmisión es por contacto estrecho con las secreciones respiratorias que se generan con la tos o el estornudo de una persona enferma.",
    "como se transmite?" => "La transmisión es por contacto estrecho con las secreciones respiratorias que se generan con la tos o el estornudo de una persona enferma.",
    
    //recontagio

    "es posible volverse a contagiar por el virus?" =>"Actualmente no existe evidencia suficiente que permita afirmar que una persona que ha pasado la enfermedad pueda volver a infectarse.",
    "es posible volverse a contagiar por el coronavirus?" =>"Actualmente no existe evidencia suficiente que permita afirmar que una persona que ha pasado la enfermedad pueda volver a infectarse.",
    "volverse a contagiar" =>"Actualmente no existe evidencia suficiente que permita afirmar que una persona que ha pasado la enfermedad pueda volver a infectarse.",

    //vacuna
    "existe alguna vacuna?" =>"Por el momento no se dispone de vacuna que proteja frente a la COVID-19, pero se están realizando estudios clínicos con diversos candidatos, y sería previsible que en un plazo prudente de tiempo (1-2 años) se autorice alguna vacuna frente al nuevo coronavirus.",
    "existen vacunas?" =>"Por el momento no se dispone de vacuna que proteja frente a la COVID-19, pero se están realizando estudios clínicos con diversos candidatos, y sería previsible que en un plazo prudente de tiempo (1-2 años) se autorice alguna vacuna frente al nuevo coronavirus.",
    "vacunas disponibles?" =>"Por el momento no se dispone de vacuna que proteja frente a la COVID-19, pero se están realizando estudios clínicos con diversos candidatos, y sería previsible que en un plazo prudente de tiempo (1-2 años) se autorice alguna vacuna frente al nuevo coronavirus.",
    
    ///antibioticos
    "son eficaces los antibióticos para prevenir o tratar el COVID-19?" =>"No. La norma general que debemos recordar es que los antibióticos no son eficaces contra los virus, solo contra las infecciones bacterianas. La COVID-19 está causada por un virus, de modo que los antibióticos no sirven frente a ella.",
    "antibioticos para el covid 19?" =>"No. La norma general que debemos recordar es que los antibióticos no son eficaces contra los virus, solo contra las infecciones bacterianas. La COVID-19 está causada por un virus, de modo que los antibióticos no sirven frente a ella.",
    "antibioticos?" =>"No. La norma general que debemos recordar es que los antibióticos no son eficaces contra los virus, solo contra las infecciones bacterianas. La COVID-19 está causada por un virus, de modo que los antibióticos no sirven frente a ella.",
    
    //mascotas
    "mi mascota me puede contagiar la covid 19?" =>"Aunque ha habido un caso de un perro infectado en Hong Kong, hasta la fecha no hay pruebas de que un perro, un gato o cualquier mascota pueda transmitir la COVID-19.",
    "las mascotas se contagian?" =>"Aunque ha habido un caso de un perro infectado en Hong Kong, hasta la fecha no hay pruebas de que un perro, un gato o cualquier mascota pueda transmitir la COVID-19.",
    "animales se pueden contagiar?" =>"Aunque ha habido un caso de un perro infectado en Hong Kong, hasta la fecha no hay pruebas de que un perro, un gato o cualquier mascota pueda transmitir la COVID-19.",
   
    //conceptos
    "que es un virus?" =>"Los virus surgen continuamente y representan un desafío para la salud pública.",
    "que es una Epidemia?" =>"Una epidemia es la aparición de más casos de una enfermedad que los esperados en un área dada en un período de tiempo establecido. En este momento, en la epidemia de COVID-19 nos encontramos en el escenario de importación viral.",
    "que es el Coronavirus?" =>"El coronavirus SARS-Cov-2 es un virus que apareció en China. Después se extendió a todos los continentes del mundo provocando una pandemia. Actualmente Europa y América son los más afectados.",
    
    //info
    "información importante a considerar?" =>"La mayoría de las personas (alrededor del 80%) se recupera de la enfermedad sin necesidad de realizar ningún tratamiento especial.",
    "informacion que se debe tomar en cuenta?" =>"Alrededor de 1 de cada 6 personas que contraen el nuevo coronavirus puede desarrollar una enfermedad grave con dificultad para respirar.",
    "dato importante?" =>"En torno al 2% de las personas que han contraído la enfermedad han muerto. Las personas que tengan fiebre, tos y dificultad para respirar deben buscar atención médica.",
    
       
    //name
    "como te llamas?" =>"Soy coroBot y estoy para servirte",
    "cual es tu nombre?" =>"Soy coroBot y estoy para servirte",
    "tienes nombre?" =>"Soy coroBot y estoy para servirte",


    //saludo
    "hola" =>"Hola que tal!",
    "un saludo" =>"como te va",
    "hello" =>"un gusto de verte",
 
    //despedida
    "adios" =>"cuidate",
    "hasta la proxima" =>"nos vemos pronto",
    "nos vemos" =>"te estare esperando",
    "bye" =>"Good bye ♥",
    "see you" =>"see you lader ♥",
    //
    "what is your name?" =>" my name is CoroBot",
   


    "tu nombre es?" => "Mi nombre es " . $bot->getName(),
    "tu eres?" => "Yo soy una " . $bot->getGender()
    
];

if (isset($_GET['msg'])) {
   
    $msg = strtolower($_GET['msg']);
    $bot->hears($msg, function (Bot $botty) {
        global $msg;
        global $questions;
        if ($msg == 'hi' || $msg == "hello") {
            $botty->reply('Hola');
        } elseif ($botty->ask($msg, $questions) == "") {
            $botty->reply("Lo siento, Las preguntas deben estar relacionadas con coronavirus.");
        } else {
            $botty->reply($botty->ask($msg,$questions));
        }
    });
}
