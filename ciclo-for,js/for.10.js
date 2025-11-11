function potenciaCorta(base, exponente){
    if (exponente === 0) return 1;

    let r=1
    for (let i = 0; i < exponente; i++){
        r *= base;
    }
    return r; 
}
console.log(potenciaCorta(4,2));