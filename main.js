//Llamado al nodo de DOM
let root = document.querySelector("#root");

let div_formulario = document.createElement("div");
div_formulario.className = "div_formulario";

//Lista de datos (String)
let formulario = [
    {nombre: "Login", link: "login/login.html"},
    {nombre: "Formulario De Pedido", link: "componentes/FormularioPedido/Pedido.html"},
    {nombre: "Formulario De Busqueda", link: "componentes/FormularioBusqueda/Busqueda.html"},
    {nombre: "Formulario De Registro", link: "componentes/FormularioDeRegistro/Registro.html"},
    {nombre: "Formulario De Contacto", link: "componentes/FormularioContacto/Contacto.html"},
];

formulario.forEach(itemLista => {
    let div_item = document.createElement("a");
    div_item.className = "item";
    div_item.href = itemLista.link;
    div_item.innerText = itemLista.nombre;

    div_formulario.appendChild(div_item);
});

root.appendChild(div_formulario);
