window.addEventListener("load", function() {
    page = decodeURI(document.location.href)
    var sndpage_texte = document.getElementById("sndpage_texte");
    var sndpage_nombre = document.getElementById("sndpage_nombre");
    var cle1 = page.split("?")[1].split("&")[0].split("=")[1]
    var cle2 = page.split("?")[1].split("&")[1].split("=")[1]
    sndpage_texte.innerHTML = "Texte: " + cle1
    sndpage_nombre.innerHTML = "Nombre: " + cle2
})