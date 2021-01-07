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
N = lireEntier();
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
N = lireEntier();
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
N = lireEntier();
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
a = prompt("a: ");
b = prompt("b: ");
c = prompt("c: ");
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

//================================FONCTIONS========================================//

//Fonction lireEntier
function lireEntier() {
    x = prompt("Choix d'un nombre")
    return x
}