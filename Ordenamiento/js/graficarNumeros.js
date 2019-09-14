var num = "num";
var alto = 300;

for (var i = 0; i < 1; i++){
    document.write(num,"<br>");
    alto++;
    document.getElementById(num + i.toString()).style.height = alto + 'px';
}

