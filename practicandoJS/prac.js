function proximoEnLaFila(arreglo, elemento){
  arreglo.push(elemento); // agregando al final del arreglo
  return arreglo.shift(); //remover el primer elemento y retornarlo
}

var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Después: " + JSON.stringify(miArreglo));
var otroArreglo = {
  "azucar" : 2, "arroz": 3, "a": 5, 
};
console.table(otroArreglo);
var a = 5; 
var b = a;
console.log(a == b);
console.log(a === b);
a = "java";
b = "java";
console.log(a === b);
var comida = 'arroz';
console.log(comida);
var otraComida = "pure de papas";
console.log(otraComida);

var aleatorio = Math.ceil(Math.random()*10);