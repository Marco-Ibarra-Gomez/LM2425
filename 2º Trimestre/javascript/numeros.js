let array = [];
    function anadir(event){
        event.preventDefault();
        let valorArray0 = document.getElementById("numero").value;
        let valorArray;
        let valorArray1;
        if(isNaN(valorArray0) || valorArray0 === ''){
            alert('Por favor, ingresa un número');
        }else{
            valorArray = valorArray0.replace(',', '.');
            valorArray1 = parseFloat(valorArray);
            array.push(valorArray1);
        }
        }
    function mostrar(event){
        event.preventDefault();
        if(array.length === 0){
            document.getElementById("mostrar").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            document.getElementById("mostrar").innerHTML = array;
        }
    }
    function suma(){
        let sumatorio = 0;
        if(array.length === 0){
            document.getElementById("media").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            for(let i = 0; array.length>i; i++){
                sumatorio += array[i];
            }
            document.getElementById("media").innerHTML = sumatorio;
        }
    }
    function grande(){
        if(array.length === 0){
            document.getElementById("mostrar").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            let numeroGrande = array[0];
            for(let i = 0; array.length>i; i++){
                if(array[i]>numeroGrande){
                    numeroGrande = array[i];
                }
            }
            document.getElementById("media").innerHTML = numeroGrande;
        }
    }
    function pequeno(){
        if(array.length === 0){
            document.getElementById("mostrar").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            let numeroMenor = array[0];
            for(let i = 0; array.length>i; i++){
                if(array[i]<numeroMenor){
                    numeroMenor = array[i];
                }
            }
            document.getElementById("media").innerHTML = numeroMenor;
        }
    }
    function posicion_array(){
        if(array.length === 0){
            document.getElementById("pos").innerHTML = 'No has introducido ningún valor en "Añadir"';
        }else{
            let numeroP = document.getElementById("posicion").value;
            let numeroP1;
            let numeroP2;
            if(isNaN(numeroP) || numeroP === ''){
                alert('Por favor, ingresa un número');
            }else{
                numeroP1 = numeroP.replace(',', '.');
                numeroP2 = parseFloat(numeroP1);
                let encontrado = 0;       
                for(let i = 0; array.length>i; i++){
                    if(array[i] === numeroP2){
                        document.getElementById("pos").innerHTML = "El número introducido está en la posición " + i;
                        encontrado = 1;
                    }
                }
                if(encontrado === 0){
                    document.getElementById("pos").innerHTML = "El número introducido no coincide con ningún valor agregado en 'Añadir'";
                }
            }
        }
    }