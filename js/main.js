var lista =document.getElementById("lista");
function agregarMensaje()
{
    var texto=document.getElementById("texto");
    if(texto == ""){
        alert("debes ingresar tarea");
    }
    else
        crear(lista , texto.value);
    
    texto.value="";
    texto.focus();
}
// agregar texto
function crear(lista , texto){
    var div=document.createElement("div");
    var check=document.createElement("input");
    check.type="checkbox";
    var span = document.createElement("span");
    var icono = document.createElement("i");
   icono.className = "glyphicon  glyphicon-trash , pull-right , ico";
    span.innerText=texto;
    div.appendChild(check);
    div.className="div "
    div.appendChild(span);
    div.appendChild(icono);
    lista.appendChild(div);
    
    
    
   
// funcion de eliminar
var close = document.getElementsByClassName("ico");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
 
    //asignar objeto al checket
check.addEventListener('click', function(ev) {
  if (ev.target.checked) {
    ev.target.parentNode.className='checked';
  }
}, false);

}


