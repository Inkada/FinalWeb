
/*
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
*/
window.addEventListener('load',function(){
    var compras = JSON.parse(localStorage.getItem('compras'));
    if(compras==null){
        compras=[];
    }

    console.log(arreglo);
    this.document.querySelector('.carritu').addEventListener('click',function(){
        var url = '/agregarCarro?nombre='+this.getAttribute('data-name');
        fetch(url,{
            method: 'GET',
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(function(res){
            console.log(res);
            compras.push(res);
            localStorage.setItem('compras',JSON.stringify(compras));
            console.log('ARREGLO /////////////////////');
            console.log(compras);
        })
    });
});