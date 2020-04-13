var arreglo = [1, 3, 5, 8];

//los objetos no tienen orden 
// llave: valor
var objeto = {
    nombre: "La noche estrellada",
    autor: "Vincent Van Gogh",
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


    /*/ Objeto pintura 2 /*/
    var objeto2={
    nombre: "Girasoles",
    autor: "Vincent Van Gogh",
    tecnica: "Oleo",
    colores: ["#FFEC33", "#88603B"],
    anio: 1888,
    url: "https://previews.123rf.com/images/afonskaya/afonskaya1410/afonskaya141000023/32979985-ilustraci%C3%B3n-pintada-a-mano-pintura-al-%C3%B3leo-ramo-de-girasoles-.jpg",

infoGirasoles: function() {
return "La obtra: " + this.nombre + " fue pintada por " + this.autor + "en el año " + this.anio;
}

}
var objeto2Nombre = document.getElementById ("objeto2-nombre");
var objeto2Mensaje = document.getElementById ("objeto2-mensaje");
var objeto2Url = document.getElementById ("objeto2-imagen");

objeto2Nombre.innerHTML = objeto2.nombre;
objeto2Mensaje.innerHTML = objeto2.infoGirasoles();
objeto2Url.src = objeto2.url;


    /*/ Objeto pintura 3 /*/
    var objeto3={
        nombre: "Autoretrato",
        autor: "Vincent Van Gogh",
        tecnica: "Oleo",
        colores: ["#FFEC33", "#88603B"],
        anio: 1890,
        url: "https://painting-planet.com/images2/autorretrato-en-sombrero-de-fieltro-vincent-van_1.jpg",
    
    infoGirasoles: function() {
    return "La obtra: " + this.nombre + " fue pintada por " + this.autor + "en el año " + this.anio;
    }
    
    }
    var objeto3Nombre = document.getElementById ("objeto3-nombre");
    var objeto3Mensaje = document.getElementById ("objeto3-mensaje");
    var objeto3Url = document.getElementById ("objeto3-imagen");
    
    objeto3Nombre.innerHTML = objeto3.nombre;
    objeto3Mensaje.innerHTML = objeto3.infoGirasoles();
    objeto3Url.src = objeto3.url;
    


    function dimeMiNombre (){

        var nombre = document.getElementById ("nombre");
        var miNombre = document.getElementById ("mi-nombre")
        miNombre.innerHTML=nombre.value; 
        // alert ("tu nombre es " + nombre.value)


    }
