const productoArray=[
    {  //repuestos
        id: "repuestos-01",
        titulo: "bateria para 110cc",
        imagen:"img/repuestos/bateria.jpg", 
        categoria: {
            nombre: "repuestos",
            id: "repuestos"
        },
        precio: "$ 1000 " 

    },
    
    { id: "repuestos-02",
        titulo: "velocimetro para 110cc",
        imagen:"img/repuestos/velocimetro.jpg", 
        categoria: {
            nombre: "repuestos",
            id: "repuestos"
        },
        precio: "$ 18000 " 
    },
    {
        id: "repuestos-03",
        titulo: "tambor y llave para skua 150cc",
        imagen:"img/repuestos/llave-skua.jpg", 
        categoria: {
            nombre: "repuestos",
            id: "repuestos"
        },
        precio: "$ 10000 "

    },
    //aceites y lubricantes
    {
        id: "aceites-01",
        titulo: "Aceite Gulff 800ml",
        imagen: "img/aceites y lubricantes/aceite.jpg",
        categoria: {
            nombre: "aceites y lubricantes",
            id: "aceites y lubricantes"
        },
        precio: "$5000"
    },
    {
        id: "aceites-02",
        titulo: "Lubricante sintético",
        imagen: "img/aceites y lubricantes/lubricante.jpg",
        categoria: {
            nombre: "a ceites y lubricantes",
            id: "aceites y lubricantes"
        },
        precio: "$8000"
    },
    {
        id: "aceites-03",
        titulo: "aceite wander 4T",
        imagen: "img/aceites y lubricantes/aceite wander 4t.png",
        categoria: {
            nombre: "aceites y lubricantes",
            id: "aceites y lubricantes"
        },
        precio: "$8000" 
    },
    {
        id: "aceites-02",
        titulo: "aceite yamalube 2T",
        imagen: "img/aceites y lubricantes/aceite yamalube 2t.png",
        categoria: {
            nombre: "aceites y lubricantes",
            id: "aceites y lubricantes"
        },
        precio: "$8000"
    },
    {
        id: "aceites-02",
        titulo: "Lubricante para suspencion AMA",
        imagen: "img/aceites y lubricantes/lubricante-suspencion ama.png",
        categoria: {
            nombre: "aceites y lubricantes",
            id: "aceites y lubricantes"
        },
        precio: "$8000"
    },
    //estetica
    {
        id: "aceites-02",
        titulo: "Piloto marca Delta, talle XL",
        imagen: "img/estetica/piloto delta talle xl.png",
        categoria: {
            nombre: "estetica",
            id: "estetica"
        },
        precio: "$8000"
    },
    {
        id: "aceites-02",
        titulo: "aerosoles",
        imagen: "img/estetica/aerosoles.png",
        categoria: {
            nombre: "estetica",
            id: "estetica"
        },
        precio: "$8000"
    },

]



const contenedorProductos= document.querySelector(".contenedor-productos");
const botonesCategorias = document.querySelectorAll(".btn-nav");
const tituloPrincipal = document.querySelector("#titulo-principal");



//*productoArray.forEach(producto => {
    // const div= document.createElement("div");
    //div.classList.add("producto");
     //div.innerHTML = `
   // <img class="producto-img" src="${producto.imagen}" alt="${prodcuto.titulo}">
        //<div class="prodcuto-detalle" >
          //<h3 class="producto-titulo">${producto.titulo}</h3>
      // <p class="producto-precio">${producto.precio}</p>
       //</div>
       
        //`;
        //contenedorProductos.append(div)

    //})



function cargarProductos(productosElegidos){
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach (producto =>{
    
       const div= document.createElement("div");
       div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-img" src="${producto.imagen}" alt="${producto.titulo}">
        <div class="producto-detalle" >
          <h3 class="producto-titulo">${producto.titulo}</h3>
         <p class="producto-precio">${producto.precio}</p>
        </div>
       
         `;
        contenedorProductos.append(div)

    })

}
cargarProductos(productoArray);
document.getElementById("todos").classList.add("active");


botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) =>{
        botonesCategorias.forEach(b => b.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if(e.currentTarget.id != "todos"){
            const productoCategoria = productoArray.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productoArray.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);


        }else{
            tituloPrincipal.innerText = "todos los productos";
            cargarProductos(productoArray)
        }

        
    })
}

)


//<div class="producto"></div>
 //               <img class="producto-img" src="img/bateria.jpg" alt="">
   //             <div class="prodcuto-detalle" >
     //               <h3 class="producto-titulo">bateria para 110cc</h3>
       //             <p class="producto-precio">$1000</p>
         //       </div>