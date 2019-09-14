var arreglo = [];
var aux;

for (var i = 0; i < 1; i++){
    arreglo.push(Math.floor(Math.random() * (10 - 0) + 0));
    document.write(arreglo[i],"<br>");
}

document.write("<br>");
var num = arreglo.length;

for(var z = 1; z < num; ++z) {
    for(var v = 0; v < (num - z); ++v) {
       if(arreglo[v] > arreglo[v+1]){
          aux = arreglo[v];
          arreglo[v] = arreglo[v + 1];
          arreglo[v + 1] = aux;
       }
    }
  }

for (var i = 0; i < 1; i++){
    document.write(arreglo[i],"<br>");
}