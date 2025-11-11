let texto = "Jorge Zabala";
let i = 0;
let contador = 0;
while (i < texto.length) {
    if (texto[i] === "a") {
        contador++;
    }
    i++;
}
console.log(contador);