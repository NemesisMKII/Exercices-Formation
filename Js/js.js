// Ex 1 POUR

//Variables
var N, resultat, cpt;

//Début programme SOMME
N =  5;
resultat = 0;

for (cpt = 0; cpt <= N; cpt++) {
    resultat = resultat + cpt;
}

console.log("Ex 1 / POUR");
console.log("le résultat avec Pour est: ", resultat);

//Fin du programme

//Ex 1 WHILE

//Variables
var N, resultat, cpt;

//Début programme SOMME

N = 5;
resultat = 0;
cpt = 0;        

while (cpt <= N) {
    resultat = resultat + cpt;
    cpt++;
}

console.log("Ex 1 / WHILE");
console.log("Le résultat avec WHILE est: ", resultat);

// Fin du Programme

//Ex 1 REPETER JUSQUA

//Variables 
var N, resultat, cpt;

//Début programme SOMME

N = 5;
resultat = 0;
cpt = 0;

do {
    resultat = resultat + cpt;
    cpt++;
} while (cpt <= N);

console.log("Ex 1 / REPETER JUSQU'A ");
console.log("Le résultat avec Répéter est: ", resultat);

//Fin du programme

console.log("===========================================================")

//Ex 2 WHILE

var N, resultat, cpt;

//Début programe factorielle

resultat = 1;    
N = 5;
cpt = 1;

console.log("Ex 2 / WHILE")
if (N == 0 || N == 1) {
    console.log("Le résultat avec WHILE est: ", resultat)
} else {
    while (cpt <= N) {
    resultat = resultat * cpt;
    cpt++;
    }
    console.log("Le résultat avec WHILE est: ", resultat)
}

//Fin du programme 

//Ex 2 REPETER

//Variables
var N, resultat, cpt;

///Début du programme factorielle
resultat = 1;
N = 5;
cpt = N;

console.log("Ex 2 / REPETER");
do {
    resultat = resultat * cpt;
    cpt--;
} while (cpt > 1);
console.log("Le résultat avec REPETER est: ", resultat)

//Fin du programme 

//Ex 2 POUR

//Variables
var N, resultat, cpt;

//Début du programme factorielle
resultat = 1;
N = 5;
cpt = N;

console.log("Ex 2 / POUR")
for (cpt; cpt > 1; cpt--) {
    resultat = resultat * cpt;
}
console.log("Le résultat avec POUR est: ", resultat)

//Fin du programme
console.log("========================================================")

//Ex 3 

//Variables
var a, b, c, d, resultat;

//Début du programme EquationSeconDegré
a = 1;
b = 2;
c = 1;
D = (b*b) - (4 * a * c);

console.log("Ex 3")
if (D < 0) {
    console.log("Aucune solution possible");
} else if (D === 0) {
    console.log("Il y a une solution double pour cette équation: -b/2a soit ici ", resultat = (-b/(2*a)));
} else {
    console.log("Il y a deux solutions possibles: ");
    console.log("(-b + racine(D))/(2a) soit ici ", resultat = (-b + Math.sqrt(D))/(2*a));
    console.log("(-b - racine(D))/(2a) soit ici ", resultat = (-b - Math.sqrt(D))/(2*a));
}

//Fin du programme

console.log("===============================================================")

//Ex 4

//Variables
var x, y, resultat;

//Début du programme CalculPuissance
x = 3;
y = 4;

console.log("Ex 4")
if (y == 0) {
    console.log("Le résultat est 1")
} else if (x == 0) {
    console.log("Le résultat est 0")
} else {
    resultat = puissance(x, y)
    console.log("Le résultat est: ", resultat)
}

//Fin du programme

console.log("=======================================================")

//Ex 5

//Variables
var X, Y;
let TabEntiers;

//Début du programme RechercheDichotomique
TabEntiers = [3, 5, 27, 37, 65, 85, 93, 99, 123, 139];
X = 5;
Y = rechercheDichotomique(X, TabEntiers);

console.log("Ex 5")
if (Y == -1) {
    console.log(X, "ne se trouve pas dans le tableau.");
} else {
    console.log(X, "se trouve au rang ",Y + 1, "du tableau.");
}

//Fin du programme

console.log("======================================================")

//Ex 6

//Variables
var cpt;

//Début du programme
TabEntiers = [5, 2, 87, 45, 23, 56, 90, 129, 234, 1];
cpt = 0

console.log("Ex 6");
console.log("Voici le tableau avant tri: ", TabEntiers);

TabEntiers = trierTableau(TabEntiers);
console.log("Voici le tableau après tri: ", TabEntiers);

//Fin du programme

//================================FONCTIONS========================================//

//Fonction lireEntier
function lireEntier() {
    x = prompt("Choix d'un nombre")
    return x
}

//Fonction Puissance
function puissance(x, y) {
    cpt = 1;
    resultat = 1;
    while (cpt <= y) {
        resultat = resultat * x;
        cpt++;
    }
    return resultat
}

//Fonction rechercheDichotomique
function rechercheDichotomique(X, TabEntiers) {
    var debut, fin, milieu, trouve;
    debut = 0;
    fin = TabEntiers.length -1;
    milieu = Math.round((debut + fin) / 2);
    trouve = false;
    while ((trouve == false) && (debut <= fin)) {
        if (X < TabEntiers[milieu]) {
            fin = Math.round(milieu - 1);
        } else if (X > TabEntiers[milieu]) {
            debut = Math.round(milieu + 1);
        } else {
            trouve = true;
        }
        milieu = Math.round((debut + fin) / 2);
    }
    if (X == TabEntiers[milieu]) {
        return milieu
    } else {
        return -1
    }
}

//Fonction triertableau
function trierTableau(TabEntiers) {
    var x, y, mem;
    for (x = 0; x < TabEntiers.length; x++) {
        for (y = 0; y < TabEntiers.length; y++) {
            if (TabEntiers[x] < TabEntiers[y]) {
                mem = TabEntiers[x]
                TabEntiers[x] = TabEntiers[y]
                TabEntiers[y] = mem
            }
        }
    }
    return TabEntiers
}

//============================================================================================================================================================//
//============================================================================================================================================================//
//============================================================================================================================================================//
//=====================================================================CODE PAGE JS===========================================================================//
//============================================================================================================================================================//
//============================================================================================================================================================//
//============================================================================================================================================================//

var Jour_nuit = document.getElementById("jr_nt");
Jour_nuit.state = true;
Jour_nuit.onclick = function () {
    if (Jour_nuit.state == true) {
        document.getElementsByTagName("body")[0].bgColor = "black";
        document.getElementsByTagName("body")[0].style.color = "white";
        Jour_nuit.state = false;
        Jour_nuit.setAttribute('value', "Nuit");
    } else if (Jour_nuit.state == false) {
        document.getElementsByTagName("body")[0].bgColor = "white";
        document.getElementsByTagName("body")[0].style.color = "black";
        Jour_nuit.state = true;
        Jour_nuit.setAttribute('value', "Jour");
    }
}

function sizeChanger () {
    document.getElementsByTagName("h1")[0].style.fontSize = "50px";
}

var click_btn = document.getElementById("click-btn");
var element = document.getElementsByTagName("div")[1]
element.slided = false
click_btn.onclick = function () {
    if (element.slided == false) {
        element.style.left = 0;
        element.slided = true;
    } else if (element.slided == true) {
        element.style.left = "-100%";
        element.slided = false;
    }
}

var btnradio = document.getElementById("choix")
btnradio.addEventListener("click", boutonradio);

function boutonradio() {
    var boutonsradio = document.getElementsByName("travail");
    var texte = document.getElementById("texte");
    for (i in boutonsradio) {
        var vraibouton = boutonsradio[i];
        if (boutonsradio[i].checked) {
            texte.value = vraibouton.value;
        }
    }
}

/*window.addEventListener("load", function() {
    //Post-It
    var btnaffiche = document.getElementById("affiche");
    var btncache = document.getElementById("cache");
    var survol = document.getElementById("survol");
    var postit = document.getElementById("postit");
    btnaffiche.addEventListener("click", function() {affiche(postit, "Vous avez cliqué sur le bouton 'Afficher")});
    btncache.addEventListener("click", function () {cache(postit)});
    survol.addEventListener("mouseover", function () {affiche(postit, "Merci de me survoler...")});
    survol.addEventListener("mouseout", function () {cache(postit)});
})

function cache(element) {
    element.style.visibility = "hidden";
}

function affiche(element, text) {
    element.style.visibility = "visible";
    ecrire_texte(element, text)
}

function ecrire_texte(element, text) {
    element.innerHTML = text;
} */

//===================================================================================================
//Chrone
/* var btn_start = document.getElementById("start");
var btn_pause = document.getElementById("pause");
var btn_stop = document.getElementById("stop");
var hoursSpan = document.getElementById("h");
var minutesSpan = document.getElementById("m");
var secondesSpan = document.getElementById("s");
var timer;
var tpsEcoule = 0;

window.addEventListener("load", function () {
    btn_start.paramTps = tpsEcoule;
    btn_pause.paramTps = tpsEcoule;
    btn_start.addEventListener("click", function (e) {
        btn_start.style.display = "none";
        btn_pause.style.display = "inline";
        btn_stop.style.display = "inline";
        // algo de calcul de nombre haures, minutes et secondes écoulées
        var startTime = new Date();

        timer = setInterval(function() {
        // 1- Convertir en secondes :
        var seconds = Math.round(
        (new Date().getTime() - startTime.getTime()) / 1000
        + e.target.paramTps); // e représente l'event déclencheur
        // e.target représente l'objet déclencheur
        // ici : bouton start ou bouton pause
        // (cette prop a été ajoutée aux boutons)
        // 2- Extraire les heures:
        var hours = parseInt( seconds / 3600 );
        seconds = seconds % 3600; // secondes restantes
        // 3- Extraire les minutes:
        var minutes = parseInt( seconds / 60 );
        seconds = seconds % 60; // secondes restantes
        // 4- afficher dans le span
        hoursSpan = ajouteUnZero(hours);
        minutesSpan = ajouteUnZero(minutes)
        secondesSpan = ajouteUnZero(seconds);
        // 5- incrémenter le nombre de secondes
        tpsEcoule += 1;
        }, 1000); // fin de function anonyme dans setInterval()
    })
})
*/


function ajouteUnZero(number) {
    if (number < 10) {
        number = "0" + number
    }
    return number
}

//==============================================================================================//
//===================================Exercice CONTROLE DE CHAMP=================================//
let alphabet = ("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z");
let chiffres = ("1","2","3","4","5","6","7","8","9","0");
var symboles = ["@", "_","."];

window.addEventListener("load", function () {
    //=============Premier bouton=================//
    var choix = document.getElementById("choixtexte")
    var btn_onclick = document.getElementById("btnclicker")
    btn_onclick.addEventListener("click", function() {
        if (choix.value.length < 2) {
            alert("La chaîne doit comporter au moins 2 caractères.")
        } else {
            alert("Vous avez saisi: " + choix.value)
        }
    })
    //=====================Second Bouton=====================//
    var chois = document.getElementById("choixmail")
    var btn_auclick = document.getElementById("btnclickeur")
    btn_auclick.addEventListener("click", verifmail)

    function verifmail() {
        if (chois.value.length = 0) {
            alert("Saisie Obligatoire")
        } else if (chois.value[0] == "@" || chois.value[chois.length] == "@") {
            alert("doit contenir un élement '@'")
        } else if ((!symboles[2] in chois.value) || (symboles[2] != chois.value[0]) || (symboles[2] != chois.value[chois.value.length])) {
            alert("doit contenir un élement '.'")
        }
    }
})