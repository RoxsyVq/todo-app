var listaTareas=[];
//boton 
function agregar(){
    var lista=document.getElementById("lista");
    var texto=document.getElementById("texto");
    
    listaTareas.push({nombre:texto.value,isDone:false});
    drawTaskList();
	texto.value="";
	texto.focus;
	
}
//agragar tareas
function drawTaskList(){
 
    var lista=document.getElementById("lista");
    lista.innerHTML="";
    for (var i in listaTareas){
        var html="<li class='div "+(listaTareas[i].isDone?"check":"")+"'><input onclick='line("+i+")' type='checkbox' "+(listaTareas[i].isDone?"checked":"")+">"+listaTareas[i].nombre+"<i onclick='remove("+i+")'class='glyphicon  glyphicon-trash pull-right ico'"+"</li>";
        lista.innerHTML+=html;
    }
    
  
    
}

//funcion line-through tachado
function line(_indice){
    if(listaTareas[_indice].isDone==false){
        listaTareas[_indice].isDone=true;
    }
    else{
        listaTareas[_indice].isDone=false;
    }
    drawTaskList();
}
// eliminar lista 


function remove(_line){
   
   listaTareas.splice(_line,1);
    drawTaskList();

}



//trabajo con Array
/*var listaTareas=[
    ["t1",true],
    ["t2",false],
    ["t3",true]
];
function drawTaskList(){
    var lista=document.getElementById("lista");
    for (var i in listaTareas){
        var html="<li><input type='checkbox' "+(listaTareas[i][1]?"checked":"")+">"+listaTareas[i][0]+"</li>";
        lista.innerHTML+=html;
    }
}*/





/*var agregar=document.getElementById("agregar");
agregar.addEventListener("click",onButtonClick);
function onButtonClick(evt){
    agregarMensaje();
}

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

}*/


