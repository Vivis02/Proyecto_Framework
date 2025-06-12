const nombre = document.querySelector('#nombre');
const enviar = document.querySelector('#enviar');
const check1 = document.querySelector('#check1');
const check2 = document.querySelector('#check2');
const edad = document.querySelector('#edad');
const telefono = document.querySelector('#telefono');
const calificacion = document.querySelector('.calificacion');
const resultados = document.querySelector('.resultados');
const correo = document.querySelector('#correo');
const comentario = document.querySelector('#comentario');
const fvalida = document.querySelector('.fvalida');


enviar.addEventListener('click',valida_envia);

function valida_envia()
{
    var n = nombre.value;
    var filtro = /^([a-zA-Z])+$/;
    if (!filtro.test(n))
    {
        resultados.innerHTML='Introduzca un nombre válido';
        bombre.focus();
        return 0;
    }
    if(!check1.checked&& !check2.checked)
    {
        resultados.innerHTML="Debe seleccionar algun sexo";
        return 0;
    }
    /* Validación de correo a través de expresiones regulares test valida que la cadena pertenezca al filtro
    inicio y fin de una expresión regular /^ expr regular $/ El email se compone de tres partes:
    nombre usuario + @ + servidor + dominio */
    var s = correo.value;
    var filtro = /^([a-zA-Z0-9\_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filtro.test(s))
    {
        resultados.innerHTML='Introduzca un email válido';
        correo.focus();
        return 0;
    }
    var edadV = edad.value;
    edadV = validarEntero(edadV);

    if (edadV=="")
    {
        resultados.innerHTML="Tiene que introducir un número entero en su edad." ;
        edad.focus();
        return 0;
    }else{
    if (edadV<18)
    {
        resultados.innerHTML="Debe ser mayor de 18 años.";
        edad.focus()
        return 0;
    }
    }

    function validarEntero(valor)
    {
    /* Mediante parseInt intentaremos transformar el valor a número entero. Si el dato fue ingresado bien y ya lo era, no hará nada */
    valor = parseInt(valor)
    /* Se comprobará si el valor es un número*/
    if (isNaN(valor)) {
    /* Si no lo es, se devuelve una cadena vacía */
    return "";
    }else{
    /* De lo contrario se devuelve el número */
    return valor;
    }
    }

    var t = telefono.value;
    var er_tlfono = /^([0-9]{10})+$/;
    //comprueba campo teléfono de formulario
    //usa el método test de expresión regular
    if(!er_tlfono.test(t))
    {
        resultados.innerHTML="Campo telefono no válido.";
        return 0; //no submit
    }

    //valido el interés
    if (calificacion.selectedIndex==0){
    resultados.innerHTML="Debe seleccionar una calificaion";
    calificacion.focus()
    return 0;
    }

    if (comentario.value.length==0)
    {
    resultados.innerHTML="Debes escribir un comentario";
    comentario.focus(); //ubica el cursor en la caja comentario
    return 0; //no avanza a commit
    }

    resultados.style.backgroundColor = 'green';
    resultados.innerHTML="Muchas gracias por enviar el formulario";
    //el  formulario se envia usando el metodo sumbit()
    function greetings() {fvalida.submit();}
    //Agregamos un tiempo de espera para simular que se va la informacion
    setTimeout(greetings, 2000);
}