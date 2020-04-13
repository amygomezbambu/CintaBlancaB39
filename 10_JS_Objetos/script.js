var arreglo = [1, 3, 5, 8];

//los objetos no tienen orden 
// llave: valor
var objeto = {
    nombre: "La noche estrellada",
    autor: "Van Gogh",
    tecnica: "Oleo",
    colores: ["#FFFFFF", "#000000"],
    anio: 1895,
    url: "https://www.salirconarte.com/wp-content/uploads/2017/06/orig_64571.jpg",



    // console.log(objeto);
    // console.log(objeto.autor);
    // console.log(objeto.calcularEdad());


    obtenerInfo: function () {
    return "La obra: " + this.nombre + " fue pintada por " + this.autor + " en el año " + this.anio;
    }


}

var objetoNombre = document.getElementById("objeto-nombre");
var objetoMensaje = document.getElementById("objeto-mensaje");
var objetoUrl = document.getElementById ("objeto-imagen");

objetoNombre.innerHTML = objeto.nombre;
objetoMensaje.innerHTML = objeto.obtenerInfo ();
objetoUrl.src = objeto.url;

    console.log(objeto.obtenerInfo())
    console.log(objetoNombre.innerHTML)



