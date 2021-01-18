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
            "Puissance": 50,
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
    "front_sprite": "Data/assets/Pkmns/macron_front.png",
    "back_sprite": "Data/assets/Pkmns/macron_back.png",
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
    "front_sprite": "Data/assets/Pkmns/poutine_front.png",
    "back_sprite": "Data/assets/Pkmns/poutine_back.png",
    "Status": "rien",
    "Nom_Dresseur": "NemesisMKII",
    "KO": false,
    "Type": "Imposant"
},
Kim_Jong_Un = {
    "nom": "Kim Jong Un",
    "sexe": "♂",
    "niveau": 50,
    "pv_max": 2150,
    "pv_actuels": 2150,
    "attaques": [
        {
            "nom": "Kinder nucléo",
            "Puissance": 130,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "tu pètes tu crèves",
            "Puissance":75,
            "Précision": 100,
            "PP_Max": 15,
            "PP_actuels": 15
        },
        {
            "nom": "Le marteau et la faucille",
            "Puissance":175,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Communo-déglingo",
            "Puissance":250,
            "Précision": 95,
            "PP_Max": 5,
            "PP_actuels": 5
        }
    ],
    "front_sprite": "Data/assets/Pkmns/kimjongun_front.png",
    "back_sprite": "Data/assets/Pkmns/kimjongun_back.png",
    "Status": "rien",
    "Nom_Dresseur": "NemesisMKII",
    "KO": false,
    "Type": "Imposant"
},
Angela_Merkel = {
    "nom": "Angela Merkel",
    "sexe": "♀",
    "niveau": 50,
    "pv_max": 1830,
    "pv_actuels": 1830,
    "attaques": [
        {
            "nom": "Coronein",
            "Puissance": 85,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Scheiss",
            "Puissance":125,
            "Précision": 100,
            "PP_Max": 15,
            "PP_actuels": 15
        },
        {
            "nom": "Ar Mein petit Frolein",
            "Puissance":95,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Der Erlkonig",
            "Puissance":195,
            "Précision": 95,
            "PP_Max": 5,
            "PP_actuels": 5
        }
    ],
    "front_sprite": "Data/assets/Pkmns/angela_merkel_front.png",
    "back_sprite": "Data/assets/Pkmns/angela_merkel_back.png",
    "Status": "rien",
    "Nom_Dresseur": "NemesisMKII",
    "KO": false,
    "Type": "Imposant"
},
Donald_Trump = {
    "nom": "Donald Trump",
    "sexe": "♂",
    "niveau": 50,
    "pv_max": 1750,
    "pv_actuels": 1750,
    "attaques": [
        {
            "nom": "Make elections GREAT AGAIN",
            "Puissance": 85,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Ô Mexi-i-co",
            "Puissance":225,
            "Précision": 100,
            "PP_Max": 15,
            "PP_actuels": 15
        },
        {
            "nom": "Fake attack",
            "Puissance":95,
            "Précision": 100,
            "PP_Max": 5,
            "PP_actuels": 5
        },
        {
            "nom": "Grab them by ...",
            "Puissance":35,
            "Précision": 95,
            "PP_Max": 5,
            "PP_actuels": 5
        }
    ],
    "front_sprite": "Data/assets/Pkmns/donald_trump_front.png",
    "back_sprite": "Data/assets/Pkmns/donald_trump_back.png",
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
    var start_message = document.getElementById("start_message")

    //On récupère le choix du Pkmn fait par le joueur
    var bouton = document.getElementById("battle")

    //Initialisation joueur
    var player_pkmn;
    bouton.addEventListener("click", function() {
        player_pkmn = getchoice()
    })

    //Récupération du DOM joueur
    var player_name = document.getElementsByClassName("nom_pkmn")[1];
    var player_sprite = document.getElementById("img_player");
    var player_gender = document.getElementsByClassName("gender")[1];
    var player_hpbar = document.getElementsByClassName("progress-bar")[1];
    var player_hp = document.getElementById("pv1");
    var player_hpMax = document.getElementById("pv2");
    var choix_attaque;

    atk_list[0] = document.getElementById("atk1");
    atk_list[1] = document.getElementById("atk2");
    atk_list[2] = document.getElementById("atk3");
    atk_list[3] = document.getElementById("atk4");
    //Attribution des attaques du joueur dans le innerHTML des attaques

    //Initialisation ennemi
    var ennemy_pkmn = pkmns_available[getRandomInt(pkmns_available.length)];

    //Récupération du DOM ennnemi
    var ennemy_name = document.getElementsByClassName("nom_pkmn")[0];
    var ennemy_sprite = document.getElementById("img_ennemy");
    var ennemy_gender = document.getElementsByClassName("gender")[0];
    var ennemy_hpbar = document.getElementsByClassName("progress-bar")[0];
    var choix_attaque_ennemi;

    //Premier écran
    var start_btn = document.getElementById("battle");
    start_btn.addEventListener("click", startbattle); // ==> Mène vers l'écran de combat, et donc la fonction principale

    //Ecran de combat
    var pet = document.getElementById("text");
    var petpet = document.getElementById("pp_text");
    var choix = document.getElementById("choix_action");
    


    function startbattle() {
        start_btn.removeEventListener("click", startbattle);
        setTimeout(function() {
            choose_screen.setAttribute("class", "invisible");
            battle_screen.setAttribute("class", "visible");
            textchat.setAttribute("class", "visible");
            atk_list.setAttribute("class", "outdisplay");
            //Affichage des noms, genre de chaque pkmn
            player_name.innerHTML = player_pkmn.nom
            player_gender.innerHTML = " | " + player_pkmn.sexe
            ennemy_name.innerHTML = ennemy_pkmn.nom
            ennemy_gender.innerHTML = " | " + ennemy_pkmn.sexe

            player_sprite.src = player_pkmn.back_sprite;
            ennemy_sprite.src = ennemy_pkmn.front_sprite;
            pet.innerHTML = "Un " + ennemy_pkmn.nom + " sauvage apparait !";
            setTimeout(function() {
                start_message.setAttribute("class", "visible")
                setTimeout(function() {
                    start_message.setAttribute("class", "invisible")
                    battle()
                }, 1000);
            })
        }, 1000);
       
    }

    function battle() {
        //Fonction principale, tant que l'un des deux Pkms ne tombe pas K.O, le combat continue
        

        //Enregistrement des JSON dans le localStorage OU Chargement si déjà présent
        if (player_pkmn.pv_actuels <= 0 || ennemy_pkmn.pv_actuels <= 0) {
            localStorage.clear()
        } else {
            if (!localStorage.getItem("player")) {
                localStorage.setItem("player", JSON.stringify(player_pkmn))
            } else {
                player_pkmn = JSON.parse(localStorage.getItem("player"))
            }
            if (!localStorage.setItem("ennemy", JSON.stringify(ennemy_pkmn))) {
                localStorage.setItem("ennemy", JSON.stringify(ennemy_pkmn));
            } else {
                ennemy_pkmn = JSON.parse(localStorage.getItem("ennemy"))
            }
            var i = 0
    
            player_hp.innerHTML = player_pkmn.pv_actuels
            player_hpMax.innerHTML = player_pkmn.pv_max
    
            //Récupération du choix d'attaque faite par le joueur
            do {
                atk_list[i].innerHTML = player_pkmn.attaques[i].nom
                atk_list[i].addEventListener("click", choix_atk)
                i += 1
            } while (i <= (player_pkmn.attaques.length - 1))
    
            //On choisit par l'aléatoire l'attaque ue l'ennemi va effectuer
            choix_attaque_ennemi = choix_atk_ennemy()
    
    
            //Début du tour
            pet.innerHTML = "Qu'allez-vous faire ?"
            choix.setAttribute("class", "ondisplay");
            choix.addEventListener("click", function() {
                pet.setAttribute("class","outdisplay")
                atk_list.setAttribute("class","ondisplay")
            })
        }
    }

    function getchoice() {
        var choixpkmn = document.getElementById("select_your_pokemon").options; 
        for (i in choixpkmn) {
            if (choixpkmn[i].selected) {
                return pkmns_available[i]
            }
        }
    }

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    function choix_atk(event) {
        for (i in player_pkmn.attaques) {
            if (event.target.innerHTML == player_pkmn.attaques[i].nom) {
                choix_attaque = player_pkmn.attaques[i]
            }
        }
        choix.setAttribute("class", "outdisplay")
        atk_list.setAttribute("class","outdisplay")
        setTimeout(function() {
            pet.setAttribute("class","ondisplay")
            pet.innerHTML = "Votre " + player_pkmn.nom + " a utilisé " + choix_attaque.nom;
            setTimeout(function() {
                degats()
                enregistrement()
            }, 1000);
            setTimeout(battle, 2000);
        }, 1000)
    }

    function choix_atk_ennemy() {
        return ennemy_pkmn.attaques[getRandomInt(ennemy_pkmn.attaques.length)]
    }  

    function degats() {
        player_pkmn.pv_actuels = player_pkmn.pv_actuels - choix_attaque_ennemi.Puissance
        player_hpbar.style.width = ((player_pkmn.pv_actuels / player_pkmn.pv_max) * 100) + "%" 
        if (player_pkmn.pv_actuels <= 0) {
            player_hpbar.style.width = "0%"
            player_pkmn.pv_actuels = 0
            player_hp.innerHTML = 0
        }
        console.log("player: " + choix_attaque.nom)
        console.log("ennemy: " + choix_attaque_ennemi.nom)
        ennemy_pkmn.pv_actuels = ennemy_pkmn.pv_actuels - choix_attaque.Puissance
        ennemy_hpbar.style.width = ((ennemy_pkmn.pv_actuels / ennemy_pkmn.pv_max) * 100) + "%" 
        if (ennemy_pkmn.pv_actuels <= 0) {
            ennemy_hpbar.style.width = "0%"
            ennemy_pkmn.pv_actuels = 0
        }
        console.log(player_pkmn.pv_actuels)
        console.log(ennemy_pkmn.pv_actuels)
    }

    function enregistrement() {
        localStorage.setItem("player", JSON.stringify(player_pkmn))
        localStorage.setItem("ennemy", JSON.stringify(ennemy_pkmn))
    }
})
