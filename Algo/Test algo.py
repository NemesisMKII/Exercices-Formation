def lireEntier():
    entier = int(input("entier: "))
    return entier

def puissance(x, y):
    i = 1
    resultat = 1
    while i <= y:
        resultat = resultat*x
        i += 1
    return resultat

X = lireEntier()
Y = lireEntier()

print("Le résultat est: ", puissance(X, Y))