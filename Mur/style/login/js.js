$(document).ready(() => {
    letters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    if (!localStorage.getItem("user_list")) {
        var user_list = []
    } else {
        var user_list = JSON.parse(localStorage.getItem("user_list"))
    }

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
                username: $(`input[data-id=newusername]`).val(),
                password :  $(`input[data-id=newpassword]`).val(),
                email : $(`input[data-id=newmail]`).val(),
                first_name: $(`input[data-id=prenom]`).val(),
                last_name: $(`input[data-id=nom]`).val(),
                age: $(`input[data-id=age]`).val(),
                user_ID: generate_ID(),
                is_connected: false
            }
            user_list.push(new_user)
            localStorage.setItem("user_list",JSON.stringify(user_list))
            alert("Félicitations! Vous êtes désormais inscrit.")
        }
    })

    //Ajout d'évenement au clic sur le bouton "connexion"//
    $(`#btnconnexion`).click((e) => {
        e.preventDefault()
        //On vérifie si les champs sont vides
        if ($(`input[data-id=username]`).val() == "" || $(`input[data-id=password]`).val() == "") {
            alert("Identifiants/mot de passe incorrects.")
        } else {
            user_list = JSON.parse(localStorage.getItem("user_list"))
            var check_loginn = check_login()
            if (check_loginn) {
                alert("Connecté !")
                window.location.href = "main_page.html"
            } else {
                alert("Identifiants/Mot de passe incorrects.")
            }
        }
    })
    

    function login_toggle(e) {
        //Fonction qui permet d'alterner entre les formulaires de connexion et d'inscription
        e.preventDefault()
        $(`#loginscreen`).toggleClass("invisible")
        $(`#inscriptionscreen`).toggleClass("invisible")
    }

    function check_login() {
        for (i in user_list) {
            if ($(`input[data-id=username]`).val() != user_list[i].username) {
                if ($(`input[data-id=username]`).val() != user_list[i].email) {
                }
            } else {
                if ($(`input[data-id=password]`).val() == user_list[i].password) {
                    user_list[i].is_connected = true
                    localStorage.setItem("user_list", JSON.stringify(user_list))
                    return true
                } else {
                }
            }
        }
    }

    function generate_ID() {
        var ID = "";
        for (var i = 0; i < 30; i++) {
            var x = letters[getRandomInt(62)]
            ID += x
        }
        return ID
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
})