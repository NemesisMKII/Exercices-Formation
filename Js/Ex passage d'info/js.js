//=================================Première Page ===========================================//
window.addEventListener("load", function() {
    premiere_page = "index.html"

    var nbValue = document.getElementById("nombre");
    var textValue = document.getElementById("texte");
    btn_click = document.getElementById("btnclick");

    btn_click.addEventListener("click", function() {
        seconde_page = "res.html?cle1=" + nbValue.value + "&cle2=" + textValue.value
        window.location.href = seconde_page
    })
})
