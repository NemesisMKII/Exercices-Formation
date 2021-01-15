//JSON//

var pkmns_available = [macron = {
    "nom": "Emmanuel Macron",
    "sexe": "♂",
    "niveau": 50,
    "pv_max": 1630,
    "pv_actuels": 1630,
    "attaques": [
        {
            "nom": "Poudre de Perlinpainaîn",
            "Puissance": 80,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Confinement",
            "PP_Max": 15,
            "PP_actuels": 15
        },
        {
            "nom": "Brigitte!",
            "Puissance":70,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Traverser la rue",
            "Puissance":65,
            "Précision": 95,
            "PP_Max": 15,
            "PP_actuels": 15
        }
    ],
    "Status": "rien",
    "Nom_Dresseur": "NemesisMKII",
    "KO": false,
    "Type": "Normal"
}, 

poutine = {
    "nom": "Vladimir Poutine",
    "sexe": "♂",
    "niveau": 50,
    "pv_max": 1730,
    "pv_actuels": 1730,
    "attaques": [
        {
            "nom": "la b*te et le couteau",
            "Puissance": 80,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Nasdrovie",
            "Puissance":80,
            "Précision": 100,
            "PP_Max": 15,
            "PP_actuels": 15
        },
        {
            "nom": "Rasputin",
            "Puissance":100,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "USSR",
            "Puissance":65,
            "Précision": 95,
            "PP_Max": 15,
            "PP_actuels": 15
        }
    ],
    "Status": "rien",
    "Nom_Dresseur": "NemesisMKII",
    "KO": false,
    "Type": "Imposant"
}]

//FIN JSON//

//=====JS=====//

window.addEventListener("load", function() {
    //récupération de différentes variables
    var choose_screen = document.getElementById("choose_screen");
    var battle_screen = document.getElementById("battle_screen");
    var textchat = document.getElementById("textchat");
    var atk_list = document.getElementById("attaques");

    //On récupère le choix du Pkmn fait par le joueur
    var bouton = document.getElementById("battle")
    var player_pkmn;
    bouton.addEventListener("click", function() {
        player_pkmn = getchoice()
    })

    //Initialisation variables du joueur
    var player_name = document.getElementsByClassName("nom_pkmn")[1];
    var player_gender = document.getElementsByClassName("gender")[1];
    var player_hpbar = document.getElementsByClassName("progress-bar")[1];
    var player_hp = document.getElementById("pv");
    var player_atk1 = document.getElementById("atk1");
    var player_atk2 = document.getElementById("atk2");
    var player_atk3 = document.getElementById("atk3");
    var player_atk4 = document.getElementById("atk4");

    //Initialisation variables de l'ennemi
    var ennemy_name = document.getElementsByClassName("nom_pkmn")[0];
    var ennemy_gender = document.getElementsByClassName("gender")[0];
    var ennemy_hpbar = document.getElementsByClassName("progress-bar")[0];

    //Premier écran
    var start_btn = document.getElementById("battle");
    start_btn.addEventListener("click", startbattle); // ==> Mène vers l'écran de combat, et donc la fonction principale


    function startbattle() {
        start_btn.removeEventListener("click", startbattle);
        setTimeout(function() {
            choose_screen.setAttribute("class", "invisible");
            battle_screen.setAttribute("class", "visible");
            textchat.setAttribute("class", "visible");
            textchat.innerHTML = "Un " + poutine.nom + " apparait !";
            setTimeout(battle, 1000);
        }, 1000);
       
    }

    function battle() {
        //Fonction principale, tant que l'un des deux Pkms ne tombe pas K.O, le combat continue

        //Enregistrement des JSON dans le localStorage OU Chargement si déjà présent
        if (!localStorage.getItem("player")) {
            localStorage.setItem("player", JSON.stringify(player_pkmn))
        } else {
        }
        if (!localStorage.setItem("ennemy", JSON.stringify(poutine))) {
            localStorage.setItem("ennemy", JSON.stringify(poutine));
        }
    }

    function getchoice() {
        var choixpkmn = document.getElementById("select_your_pokemon").options; 
        for (i in choixpkmn) {
            console.log(choixpkmn[i].value)
            if (choixpkmn[i].selected) {
                return pkmns_available[i]
            }
        }
    }

})
