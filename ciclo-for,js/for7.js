let numeros = [4,5,2,3,8,10,3,4,7]
function devolverMaximo(array){

    let numeroMayor = 0
    for(let i=0; i<array.lenght; i++){
        if(array[i]>array[i+1]){
            numeroMayor=array[i];
        }
    }
    return numeroMayor
}
console.log(devolverMaximo(numeros));