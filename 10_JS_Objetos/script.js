var arreglo = [1, 3, 5, 8]

//los objetos no tienen orden 
// llave: valor
var objeto = {
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Oleo",
    colores: ["#FFFFFF", "#000000"],
    anio: 1895,



    //metodos
    calcularEdad; function() { return 2020 - this.anio }
}
console.log(objeto);
console.log(objeto.autor);
console.log(objeto.calcularEdad());

ontenerinfo: function() {
    return "La pintura" + this.nombre + "fue pintada por" + this.autor + "fue pintada en el año" + this.anio;
}
console.log(objeto.ontenerinfo());
