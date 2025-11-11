let numeros = [4,3,6,7,1,9,10,345,234,560,4,10,20];

function darmePares (array){
    let arrayPares =[]
    for(let i=0; i<=numeros.length;i++){

        if(numeros[i]%2===0){
            arrayPares.push(numeros[i]);

        }
    
    }
}

let arrayNuevo = darmePares(numeros);
console.log(arrayNuevo);