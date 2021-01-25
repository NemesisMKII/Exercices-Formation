$(document).ready(() => {
    var produit;
    var resultat = 0;

    if (!localStorage.getItem("tableau")) {
        produit = {
            "produit": []
        }
    } else {
        produit = JSON.parse(localStorage.getItem("tableau"))

        for (x in produit.produit) {
            var ligne = produit.produit[x]

            $("#tabbody").append(`
        <tr>
            <td>${ligne.nom}</td>
            <td>${ligne.quantite}</td>
            <td>${ligne.prix}</td>
            <td>${ligne.prix_total}</td>
            <td><button class="btn btn-sm btn-danger delete">Supprimer</button></td>
        </tr>`)
        }
    }
    

    var nom_produit = $("#nom_produit")
    var quantite_produit = $("#quantite_produit")
    var prix_produit = $("#prix_produit")

    $(`#form-button`).click((e) => {
        $("#resultat").empty()
        e.preventDefault()
        var prix_total_produit = quantite_produit.val() * prix_produit.val()

        $("#tabbody").append(`
        <tr>
            <td>${nom_produit.val()}</td>
            <td>${quantite_produit.val()}</td>
            <td>${prix_produit.val()}</td>
            <td>${prix_total_produit}</td>
            <td><button class="btn btn-sm btn-danger delete">Supprimer</button></td>
        </tr>`)

        var objet = {
            nom: nom_produit.val(),
            quantite: quantite_produit.val(),
            prix: prix_produit.val(),
            prix_total: prix_total_produit
        }

        resultat += prix_total_produit
        produit.produit.push(objet)
        localStorage.setItem("tableau", JSON.stringify(produit))

        nom_produit.val("")
        quantite_produit.val("")
        prix_produit.val("")

        $(`.delete`).unbind("click", deleteligne)
        $(".delete").click(deleteligne)
        $(`#resultat`).append(`Le prix est de: ${resultat}`)
    })

    $(`.delete`).click(deleteligne)

    function deleteligne(event) {
        $("#resultat").empty()
        var monButton = $(this)
        console.log($(this));
        var maligne = monButton.parent().parent()
        resultat -= maligne.children()[3].innerHTML

        for (x in produit.produit) {
            if (maligne.children().first().text() == produit.produit[x].nom) {
                maligne.remove()
                produit.produit.splice(x, 1)
                localStorage.setItem("tableau", JSON.stringify(produit))
            }
        }
        $(`#resultat`).append(`Le prix est de: ${resultat}`)
    }
    for (x in produit.produit) {
        resultat += produit.produit[x].prix_total
        console.log(resultat);
    }
    $(`#resultat`).append(`Le prix est de: ${resultat}`)
})