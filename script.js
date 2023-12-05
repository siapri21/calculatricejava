function forclear() {
    document.getElementById("output").innerHTML = "0";
}

//qu'elle doit obtenir la valeur de l'écran de sortie et la définir par défaut (c'est-à-dire 0).
function removeZero(){
    var value =document.getElementById("output").innerHTML;
    if (value == "0"){
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}
// qui remplace le 0 par juste un espace si 0 est présent avant le début de toute opération.
function perc() {
    var value = document.getElementById("output").innerHTML;
    value = value / 100;
    document.getElementById("output").innerHTML = value;
}
//qui récupère la valeur de l'écran de sortie, la divise par 100 puis la renvoie.
function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML +=value;
}
//Permet de code pour l'affichage des valeurs sur l'écran de sortie
function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}
//qui évalue / exécute l'équation passée en paramètre. Nous utiliserons ce concept ici.
