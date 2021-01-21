//JSON//
user = {
    username: "",
    password: "",
    email: "",
    USER_ID: 0,
    friends: 0
}

postobj = {
    posts: [{
        POST_ID: 0,
        AUTHOR_ID: 0,
        date: "",
        centent: "",
        img_url: "",
        likes: [],
        coms: [
            {
                USER_ID: 0,
                date: "",
                content: ""
            }
        ]

    }]
}

//FIN JSON//

$(document).ready(() => {
    var user_list = []
    //On récupère les boutons d'accès au login/inscription
    var rdv_inscription = $(`#rdvinscription`)
    var rdv_connect = $(`#rdvconnect`)
    //Sur clic, on accède soit au formulaire d'inscription, soit au formulaire de connexion 
    rdv_connect.click(login_toggle)
    rdv_inscription.click(login_toggle)

    //Ajout d'évenement au clic sur le bouton "inscription"
    $(`#btninscription`).click((e) => {
        //On annule l'envoi du formulaire
        e.preventDefault()
        //Boucle pour vérifier si les champs sont remplis et corrects
        var champs = $(`#inscription`).children().children("input")
        for (var i = 0; i < champs.length; i++) {
            if ($(champs[i]).val() == "") {
                alert("Il y a des champs vide")
                break
            }
        }
        if ($(`input[type="password"]`)[1].value.length < 8) {
            alert("Le mot de passe doit comporter min 8 caractères !")
        } else {
            var new_user = {
                username: $(`input[data-id=username]`).val(),
                password :  $(`input[data-id=password]`).val(),
                email : $(`input[data-id=mail]`).val()
            }
            user_list.push(new_user)
            console.log(user_list);
        }
    })

    //================//
    $(`#btnconnexion`).click((e) => {
        e.preventDefault()
    })

    function login_toggle(e) {
        //Fonction qui permet d'alterner entre les formulaires de connexion et d'inscription
        e.preventDefault()
        $(`#loginscreen`).toggleClass("invisible")
        $(`#inscriptionscreen`).toggleClass("invisible")
    }
})