function escribeCancion() {
  // SE GENERA ID A PARTIR DE NOMBRE DE GRUPO, CANCION Y FECHA DE AÑADIDO A LA BBDD
  var idnum = new Date();
  var id = document.getElementById("nombregrupo").value.replace(/\s/g,'')+document.getElementById("nombrecancion").value.replace(/\s/g,'')+String(idnum.getFullYear())+String(idnum.getMonth() + 1).padStart(2, '0')+String(idnum.getDate()).padStart(2, '0');
    event.preventDefault();
    firebase.database().ref("/Canciones/"+document.getElementById("nombregrupo").value+"/"+document.getElementById("nombrecancion").value).set({
      id: id,
      duracion: document.getElementById("duracionminutos").value+":"+document.getElementById("duracionsegundos").value
    });
}
