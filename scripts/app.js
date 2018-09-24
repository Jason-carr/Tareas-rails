/*var numero1 = 10.5;
var numero2 = 5;
var resultado= numero1*numero2;
var mod= numero1%numero2;

console.log(mod);
console.log(resultado);

var nombre = 'Jason Alvarez';
var profesion = "desarrollador full stack";

console.log(nombre + profesion);

var tiene_mascota=true;
console.log(tiene_mascota);

var datos=["Jason",26,false,78,"desarrollador"];
console.log(datos[2]);

var edad=41;

if (edad>=18 && edad<=40){
        console.log("Eres un adulto joven");
}else{
	console.log("No eres un adulto joven");
}

var dias=['lunes','martes','miercoles','jueves','viernes','sabado','domingo'];

for (var i =0; i<7; i++){
	console.log(dias[i]);
}

function suma(numero1,numero2){
      var resultado=numero1+numero2;
      return resultado;
}

var res=suma(88,55);
console.log(res);*/

function iva(numero){
	var costo=numero*19/100;
	return costo;
}

var ivar=iva(9000);
console.log('El iva es →   ', ivar);