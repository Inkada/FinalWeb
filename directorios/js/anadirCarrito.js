console.log(arreglo);
fetch('http://localhost:1234/obtenerObjectID?ids='+arreglo)
.then(function(res){
    return res.json();
})
.then(function(res){
    console.log(res);
    var lista = document.querySelector('.shoppingCart');
    res.forEach(function(elem){
        lista.innerHTML += "<li>"+elem.name+"</li>";
    });
});
