function mostrarMensaje() {
    alert("Soy una función");
} 

let variableGlobal = 5;

function mifuncion1() {
    let variableLocal = "El valor es ";
    alert(variableLocal + variableGlobal);
}    

mifuncion1();

function mifuncion2(){
    let variableLocal = 7;
    alert("Nuevo valor: " + (variableLocal-variableGlobal))
}

mifuncion2();

function  ejemplo1(){
    alert("Bienvenidos a la clase de JavaScript");
}

function  ejemplo2(){
    let nombre;
    nombre = prompt("Ingrese Nombre:","");
    alert("Bienvenid@" + nombre);
}   

function ejemplo3(){
    let n1, n2, suma;
    n1 = prompt("Ingresar 1er numero");
    n2 = prompt("Ingresar 2do numero");
    suma = parseInt(n1)+parseInt(n2);
    document.write("La suma es " + suma);
}

function ejemplo4(){
    document.write('<img src="imagenes/paisaje.jpg">');
}

function ejemplo5(){
    let respuesta = confirm("¿Desea visitar la pagina de UTP?");
    if (respuesta){
        alert("Bien!!, buena eleccion");
        window.location = "https://www.utp.edu.pe/";
    }
}

function ejemplo6(){
    let n;
    n = document.getElementById('nombre').value;
    document.write("Bienvenido " + n);
}

function ejemplo7(){
    let respuesta, medio;
    respuesta = document.getElementsByName('resp');
    for(var i=0; i<respuesta.length; i++){
        if(respuesta[i].checked)
        {
            medio = respuesta[i].value;
        }
    }
    document.write("Usted se desplaza en " + medio);
}

function ejemplo8(){
    let n1, n2, p;
    n1 = document.producto.nro1.value;
    n2 = document.producto.nro2.value;
    p = n1 * n2;
    document.producto.resultado.value = p;
}

function ejercicio1() {
    var edad = parseInt(document.getElementById("edad").value);
    var monto = parseFloat(document.getElementById("monto").value);

    var descuento = 0;
    if (edad < 12) {
        descuento = 0.15; 
    } else {
        descuento = 0.10; 
    }
    var precioFinal = monto - (monto * descuento);
    document.getElementById("pagoFinal").textContent = precioFinal;
}

function ejercicio2() {
    var nota1 = parseFloat(document.getElementById("nota1").value);
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var nota3 = parseFloat(document.getElementById("nota3").value);
    var promedio = (nota1 + nota2 + nota3) / 3;

    document.getElementById("promedioFinal").textContent = promedio;

    if (promedio >= 12) {
        resultado = "Aprobado";
    }
    else{
        resultado = "Desaprobado";
    }

    document.getElementById("resultado").textContent = resultado;
}

var cantidadPositivos = 0;
var cantidadNegativos = 0;

function ejercicio3() {
    var numero = parseInt(document.getElementById("numero").value);

    if (numero > 0) {
        cantidadPositivos++;
    } else if (numero < 0) {
        cantidadNegativos++;
    }

    document.getElementById("positivos").textContent = cantidadPositivos;
    document.getElementById("negativos").textContent = cantidadNegativos;
    document.getElementById("numero").value = "";
    
    if (numero === 0) {
        document.getElementById("numero").disabled = true;
        document.querySelector("button").disabled = true;
    }
}

var cantidadNiñosPesados = 0;
var cantidadNiñasBajas = 0;
var pesoTotalNiñas = 0;
var tallaTotalNiños = 0;
var cantidadNiñas = 0;
var cantidadNiños = 0;

function ejercicio4(){
    var peso = parseFloat(document.getElementById("peso").value);
    var talla = parseFloat(document.getElementById("talla").value);
    var genero = document.getElementById("genero").value;

    if (peso > 17 && genero === "niño") {
        cantidadNiñosPesados++;
    }
    if (talla < 0.50 && genero === "niña") {
        cantidadNiñasBajas++;
    }
    if (genero === "niña") {
        pesoTotalNiñas += peso;
        cantidadNiñas++;
    }
    if (genero === "niño") {
        tallaTotalNiños += talla;
        cantidadNiños++;
    }
    document.getElementById("cantidadNiñosPesados").textContent = cantidadNiñosPesados;
    document.getElementById("cantidadNiñasBajas").textContent = cantidadNiñasBajas;
    document.getElementById("pesoPromedioNiñas").textContent = (pesoTotalNiñas / cantidadNiñas);
    document.getElementById("tallaPromedioNiños").textContent = (tallaTotalNiños / cantidadNiños);
    document.getElementById("peso").value = "";
    document.getElementById("talla").value = "";
}