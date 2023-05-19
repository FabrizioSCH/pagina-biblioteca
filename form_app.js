window.onload = function() {
    window.datos = [];
}

function addElement() {
    let dato = document.getElementById('title').value;
    datos.push(dato);
}
