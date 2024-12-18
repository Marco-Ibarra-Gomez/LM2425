function suma(){
    let cadena1 = parseFloat(document.getElementById('numero1').value);
    let cadena2 = parseFloat(document.getElementById('numero2').value);
    let sum = cadena1+cadena2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'La suma es igual a ' + sum;
}
function resta(){
    let cadena1 = parseFloat(document.getElementById('numero1').value);
    let cadena2 = parseFloat(document.getElementById('numero2').value);
    let sum = cadena1-cadena2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'La resta es igual a ' + sum;
}
function multiplica(){
    let cadena1 = parseFloat(document.getElementById('numero1').value);
    let cadena2 = parseFloat(document.getElementById('numero2').value);
    let sum = cadena1*cadena2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'La multiplicación es igual a ' + sum;
}
function divide(){
    let cadena1 = parseFloat(document.getElementById('numero1').value);
    let cadena2 = parseFloat(document.getElementById('numero2').value);
    let sum = cadena1/cadena2;
    var resultado = document.getElementById('resultado');
    resultado.innerHTML = 'La división es igual a ' + sum;
}
/*
    function suma(){
        let n1 = parseFLoat(document.getElementById('numero1').value);
        let n1 = parseFLoat(document.getElementById('numero2').value);
        let resultado = n1 + n2;
        document.getElementById('resultado').innerHTML = resultado;
    }
    function resta(){
        let n1 = parseFLoat(document.getElementById('numero1').value);
        let n1 = parseFLoat(document.getElementById('numero2').value);
        let resultado = n1 - n2;
        document.getElementById('resultado').innerHTML = resultado;
    }
    function multiplica(){
        let n1 = parseFLoat(document.getElementById('numero1').value);
        let n1 = parseFLoat(document.getElementById('numero2').value);
        let resultado = n1 * n2;
        document.getElementById('resultado').innerHTML = resultado;
    }
    function divide(){
        let n1 = parseFLoat(document.getElementById('numero1').value);
        let n1 = parseFLoat(document.getElementById('numero2').value);
        let resultado = n1 / n2;
        document.getElementById('resultado').innerHTML = resultado;
    }
*/