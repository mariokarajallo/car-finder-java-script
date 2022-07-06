//**************************VARIABLES************************************
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//coontenedor de resultados
const resultado = document.querySelector('#resultado');


const max = new Date().getFullYear(); //ano actual
const min = max - 10; // 10 anos menos al ano actual

//generar un objeto con la busqueda
const datosBusqueda ={
    marca:'',
    year:'',
    minimo:'',
    maximo:'',
    puertas:'',
    transmision:'',
    color:''
}


////**************************EVENTOS************************************

document.addEventListener('DOMContentLoaded',()=>{
    // muestra los autos al cargar la pagina web
    mostrarAutos(autos);

    // llena las opciones de ano
    llenarSelect();
})

//evento listener para los select de busqueda
marca.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.marca=e.target.value;
    filtrarAuto();
})
year.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.year=parseInt(e.target.value);
    filtrarAuto();
})
minimo.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.minimo=e.target.value;
    filtrarAuto();
})
maximo.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.maximo=e.target.value;
    filtrarAuto();
})
puertas.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.puertas=parseInt(e.target.value);
    filtrarAuto();
})
transmision.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.transmision=e.target.value;
    filtrarAuto();
})
color.addEventListener('change',e =>{
    //asigno el valor al objeto
    datosBusqueda.color=e.target.value;
    filtrarAuto();
})


//**************************FUNCIONES************************************

function mostrarAutos(autos){

    limpiarHTML()//elimina el HTML previo 
    //iteramos autos de la base de datos
    autos.forEach(auto => {

        const {marca,modelo,year,precio,puertas,color, transmision}=auto;//destructuring
        // crea un elemento parrafo con valores de la base de datos
        const autoHTML = document.createElement('p');
        autoHTML.textContent=`
            ${marca} ${modelo} ${year} - Precio: $${precio} - Puertas:${puertas} - ${color} - ${transmision}
        `;
        //insertar/muestra en el HTML
        resultado.appendChild(autoHTML);
    })
}

//limpiar HTML
function limpiarHTML(){
    while (resultado.firstChild){
        resultado.removeChild(resultado.firstChild);
    }
}


function llenarSelect (){
    // muestra el ano actual y menos 10 en el HTML
    for (let i = max; i >=min  ; i--) {
        const opcion = document.createElement('option');
        opcion.value=i;
        opcion.textContent=i;
        year.appendChild(opcion);//agregar los valores al select
        
    }
}

//funcion que filtra en base a la busqueda
function filtrarAuto(){
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear)
    .filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuerta)
    .filter(filtarTransmision).filter(filtrarColor);
    console.log(resultado);

    if (resultado.length){ //si el array no esta vacio entonces...
        mostrarAutos(resultado);
    }else{
        noResultado();
    }
}

function noResultado(){
    limpiarHTML();
    const noResultado = document.createElement('div');
    noResultado.classList.add('alerta','error');
    noResultado.textContent='No hay resultados intente otra busqueda';
    resultado.appendChild(noResultado)

}

function filtrarMarca(auto){
    const {marca}=datosBusqueda;
    //filtra los que tienen la misma marca
    if (marca){
        return auto.marca === marca;
    }
    //si no devuelve todos los valores 
    return auto;
}
function filtrarYear(auto){
    const {year}=datosBusqueda;
    //filtra los que tienen la misma marca
    if (year){
        return auto.year === year;
    }
    //si no devuelve todos los valores 
    return auto;
}
function filtrarMinimo (auto){
    const {minimo}=datosBusqueda;
    if (minimo){
        return auto.precio >= minimo;
    }else{
        return auto;
    }
}
function filtrarMaximo(auto){
    const {maximo}=datosBusqueda;
    if (maximo){
        return auto.precio <= maximo;
    }else{
        return auto;
    }
}
function filtrarPuerta(auto){
    const {puertas}=datosBusqueda;
    if (puertas){
        return auto.puertas === puertas
    } else {
        return auto;
    }
}
function filtarTransmision(auto){
    const {transmision}=datosBusqueda;
    if (transmision){
        return auto.transmision === transmision;
    }else {
        return auto;
    }
}
function filtrarColor(auto){
    const {color}=datosBusqueda;
    if (color){
        return auto.color===color;
    }else {
        return auto;
    }
}