let numeros =[4,3,6,7,2,4,6,5,4,3,10,7]
function arimetica(array){
    let suma = 0
    let promedio = 0
    for (let i = 0; i< array.length; i++){
        suma += array[i]
    } 
    promedio = suma / array.length 
    return promedio 
 }