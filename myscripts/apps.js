var fruits=['fresas','uva','manzana','naranja','pera'];
fruits.push('mandarina');

fruits.push('melon');
mostrar_fruits();
fruits.pop();
mostrar_fruits();

function mostrar_fruits(){
console.log("en total hay " +fruits.length+ " fruits");

for (var i=0; i<fruits.length;i++) {
	console.log("en la posicion "+i+ " esta la fruta "+fruits[i]);
}
}

var amigos_estudio=['miguel','daniel','alejandro'];
var amigos_trabajo=['william','jhonatan','20','1000'];
var amigos=amigos_estudio.concat(amigos_trabajo);
console.log(amigos);
console.log(amigos.join("-"));
console.log(amigos.sort());

var pos_daniel=amigos.indexOf('daniel');
console.log(pos_daniel);

amigos.splice(pos_daniel,1);
console.log(amigos);

var persona={
	nombre:"Jason",
	edad:23,
	tiene_mascota:true,
	mascota:{
		nombre:"firulais",
		raza:"galgo"}
};

console.log(persona.nombre);
console.log(persona.mascota.raza);

var ahora=new Date();
console.log(ahora);

console.log(typeof persona.edad);
console.log(persona.edad);
console.log(persona.edad.toString());

var  cantidad="25 manzanas";
console.log(parseInt(cantidad))

var texto="  la bicicleta es el mejor metodo de transporte ya que hace que uno vaya rapido y libre, y sin contaminar el aire que respirando es como un modo de librarse el mundo  "
console.log(texto.length);
console.log(texto.indexOf('libre'));

var palabra=texto.slice(80,85);
console.log(palabra);

var palabra2=texto.substr(80,5);
console.log(palabra2)

console.log(texto.replace('transporte','tr4nsp0rt3'))
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log(texto);
console.log(texto.trim());
