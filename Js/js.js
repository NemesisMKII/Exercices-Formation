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
    document.getElementsByTagName("h1")[0].style.fontSize = "300px"
}