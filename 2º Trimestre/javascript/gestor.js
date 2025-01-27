let array = [];
    function anadir(event){
        event.preventDefault();
        let valorArray0 = document.getElementById("numero").value;
        let valorArray = valorArray0.replace(',', '.');
        let valorArray1;
        if(isNaN(valorArray) || valorArray === ''){
            alert('Por favor, ingresa un número');
        }else{
            valorArray1 = parseFloat(valorArray);
        }
        array.push(valorArray1);
        console.log(array);
        }
    function mostrarOrdenado(event){
        event.preventDefault();
        if(array.length === 0){
            document.getElementById("mostrar").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            array.sort();
            document.getElementById("mostrar").innerHTML = array;
        }
    }
    function mediaAritmetica(event){
        event.preventDefault();
        let sumatorio = 0;
        if(array.length === 0){
            document.getElementById("media").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            for(let i = 0; array.length>i; i++){
                sumatorio += array[i];
            }
            let mediaA = sumatorio/array.length;
            document.getElementById("media").innerHTML = mediaA;
        }
    }