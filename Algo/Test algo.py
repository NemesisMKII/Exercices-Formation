import time

def lireEntier():
    entier = int(input("entier: "))
    return entier

def rechercheEntier(X, TabEntiers):
    debut = 0
    fin = int(len(TabEntiers))
    milieu = int((debut + fin)/2)
    Trouve = False
    while Trouve == False or debut <= fin:
        if X == TabEntiers[milieu]:
            Trouve = True
            return milieu
        if debut == fin and X != TabEntiers[fin]:
            return -1
        else:
            milieu = int((debut + fin)/2)
            if X >= TabEntiers[milieu]:
                debut = milieu + 1
            if X <= TabEntiers[milieu]:
                fin = milieu - 1

TabEntiers = (3, 5, 27, 37, 65, 85, 93, 99, 123, 139)   
X = lireEntier()

Y = rechercheEntier(X, TabEntiers)
if Y == -1:
    print(X, "ne se trouve pas dans le tableau.")
else:
    print(X, "se trouve au rang", Y+1, "dans le tableau.")