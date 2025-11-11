const texto = 'java es un programa de progamacion muy completo';
let contador =0; 
for(let i=0; i<texto.length; i++){
   let valor = texto[i].toLowerCase();
   if (valor==='a'){
    contador++;
   }
}
console.log('Encontre' +contador+' letras vocales a')
