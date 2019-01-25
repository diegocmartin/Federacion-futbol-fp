function annadir_parrafo (){ 
    var nombreap= document.getElementById("nombre").value;

    var edad= document.getElementById("edad").value;

    var cate = document.getElementById("categoria").value;
    
    
    var posi = document.getElementById("posicion").value;

var parrafo = document.createElement("p");
parrafo.innerHTML=nombreap+" "+edad+" "+cate+ " "+posi;


    document.getElementsByTagName("p")[0].appendChild(parrafo); 
    parrafo.setAttribute("id","nuevo");        
}

function borrar(){
    
    var parrafito = document.getElementById("nuevo");
    var padre = parrafito.parentNode;    
    padre.removeChild(parrafito);        
	                           
}

/*function eliminar_inputText(){
    do{ //Metemos todo en un bucle para que elimine todos los que se hayan podido crear
      var idInput="categoria"+contInput;
       var input = document.getElementById(idInput);
       var idLabel="labelcategoria"+contInput;
       var label = document.getElementById(idLabel);
       
       var padre = input.parentNode;    
       padre.removeChild(input);
       var padre = label.parentNode; 
       padre.removeChild(label);
       contInput--;                     
   } while (contInput>0);*/
