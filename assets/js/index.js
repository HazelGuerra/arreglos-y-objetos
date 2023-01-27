const propiedadesJSON = [
    {
      nombre: "Casa de campo",
      descripcion: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      cuartos: 2,
      metros: 170
    },
    {
      nombre: "Casa de playa",
      descripcion: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      cuartos: 2,
      metros: 130
    },
    {
      nombre: "Casa en el centro",
      descripcion: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      cuartos: 1,
      metros: 80
    },
    {
      nombre: "Casa rodante",
      descripcion: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      cuartos: 1,
      metros: 6
    },
    {
      nombre: "Departamento",
      descripcion: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      cuartos: 3,
      metros: 200
    },
    {
      nombre: "Mansión",
      descripcion: "Vive una vida lujosa en la mansión de tus sueños ",
      src:
        "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
      cuartos: 5,
      metros: 500
    }
  ];
 //muestra todas las propiedades al cargar la pag
  mostrarPropiedades(propiedadesJSON);
 
  //mostrar las propiedades en la pag

  function mostrarPropiedades (propiedades){

    let propiedadeshtml = "";

    for(let propiedad of propiedades){
      propiedadeshtml += `<div class="propiedad">
      <div class="img" style="background-image: url('${propiedad.src}')"></div>
      <section>
          <h5>${propiedad.nombre}</h5>
          <div class="d-flex justify-content-between">
              <p>Cuartos: ${propiedad.cuartos}</p>
              <p>Metros: ${propiedad.metros}</p>
          </div>
          <p class="my-3">${propiedad.descripcion}</p>
          <button class="btn btn-info ">Ver más</button>
      </section>
      </div> `
    }
      let contenedor = document.getElementById("contenedor1");
      contenedor.innerHTML = propiedadeshtml;

       //mostrar el total de propiedades
      let totalpropiedades = document.getElementById("total");
      totalpropiedades.innerHTML = propiedades.length;
  }
 
let botonBuscar = document.getElementById("btnbuscar");

//validar que los campos esten llenos y filtrar las propiedades

  botonBuscar.addEventListener("click", function(){
    
  let cantidadCuartos = document.querySelector("#cantidadCuartos").value;
  let metrosMinimos = document.querySelector("#metrosMin").value;
  let metrosMaximos = document.querySelector("#metrosMax").value;

    if(cantidadCuartos == "" || metrosMinimos == "" || metrosMaximos ==""){
        alert("Faltan campos por llenar");
        return false;
    } 

    let propiedades = []; 
    for(let propiedad of propiedadesJSON ){
      if(cantidadCuartos == propiedad.cuartos && metrosMinimos <= propiedad.metros && metrosMaximos >= propiedad.metros){
        propiedades.push(propiedad);
      }
    }
    mostrarPropiedades(propiedades);
    
  });




  