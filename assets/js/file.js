// on appelle les objets window et document 
var container = window.document.getElementById("container");
console.log(container.innerHTML);
// ---------------------------------------------------------
// on peut faire la meme chose en passant directement par l'objet document
var containerBis = document.getElementById("container");
console.log(containerBis.innerHTML);
// ---------------------------------------------------------
// pour récupérer les éléments par rapport à leur balise, ici p
// on peut appeler document ou container, car les éléments sont dans la variable container déclarée ligne 2
var paragraphes = container.getElementsByTagName("p");
// on fait une boucle pour afficher tous les paragraphes à la suite dans la console
for (let paragraphe of paragraphes){
    console.log(paragraphe.innerHTML);
}
// ---------------------------------------------------------
// pour récupérer un élément selon sa classe
var bleus = container.getElementsByClassName("blue");
// on fait une boucle pour afficher tous les éléments qui ont la classe bleus
for (let bleu of bleus){
    console.log(bleu.innerHTML);
}
// ---------------------------------------------------------
// pour récupérer un élément selon la valeur de l'attribut name
var parConteneurs = document.getElementsByName("parConteneur");
for (let parConteneur of parConteneurs){
    console.log(parConteneur.innerHTML);
}
// ---------------------------------------------------------
// pour récupérer les éléments p qui ont la classe blue
var pbleus = document.querySelectorAll("p.blue");
// on fait la boucle pour récupérer tous les éléments correpondants
for (let pbleu of pbleus){
    console.log(pbleu.innerHTML);
}
// ---------------------------------------------------------
// pour récupérer l'élément p qui a la classe rouge
var prouge = document.querySelector("p.red");
console.log(prouge.innerHTML);
// ---------------------------------------------------------
// pour récupérer le contenu des éléments a donc les liens
var lien = document.querySelector("a");
// pour récupérer l'attribut de l'élément href
var href = lien.getAttribute('href');
console.log(href);
// ---------------------------------------------------------
// pour modifier l'attribut d'un élément HTML (! pas conservé!)
lien.setAttribute('href', "https://html-tp-portfolio.herokuapp.com/");
console.log(lien);
console.log(lien.href);
// ---------------------------------------------------------
// pour supprimer un attribut 
// lien.removeAttribute('href');
// console.log(href);
// ---------------------------------------------------------
// ** AJOUTER / SUPPRIMER DES CLASSES ** 
var container = document.getElementById("container");
console.log(container.innerHTML);
// pour afficher le contenu d'un élément sans les balises HTML
console.log(container.textContent);
console.log(container.className);
// n'affiche rien car container n'a pas de classe pour le momnent
// on modifie la classe de container
container.className = "blue";
console.log(container.className);
// affichera blue dans la console
// on ajoute la classe à celle qui existe déjà
container.className += " red";
console.log(container.className);
// affichera bluered

// pour obtenir la liste des classes 
var list = container.classList;
// on peut ajouter une classe de cette façon avec add 
list.add("green");
// on peut ajouter pls classe à la fois
// list.add("blue", "red");
// on peut supprimer des classes 
list.remove("red");
console.log(list);
console.log(container.className);
// affichera blue green
// ---------------------------------------------------------
// pour modifier le contenu d'un élement
container.innerHTML += "<p>Hello</p>";
console.log(container.textContent);
// ajoutera le paragraphe à l'existant 
// ---------------------------------------------------------
// pour afficher le parent d'un élément => parent.Node
var parent = container.parentNode;
console.log(parent);
// nous affichera tout car le parent de container est body
console.log(parent.nodeName);
//nous affichera le nom du parent de l'élément parent, à savoir body

var premierFils = container.firstElementChild;
console.log(premierFils.nodeName);
// affiche le premier élément enfant de container, à savoir un p 

var dernierFils = container.lastElementChild;
console.log(dernierFils.nodeName);
// afficher le dernier élément enfant de container, à savoir un p

// pour récupérer tous les enfants du container
var enfants = container.childNodes;
for (let enfant of enfants){
    console.log(enfant);
}
// afficher les enfants comme pour inner.html

var enfantsBis = container.children;
for (let enfant of enfants){
    console.log(enfantsBis);
}
// afficher les enfants dans des HTMLCollection (des objets)
// ---------------------------------------------------------
// on créé une fonction qui est activée au clic sur le bouton, et qui va aller chercher la div myDiv, et lui ajouter la classe mystyle
function myFunction(){
    document.getElementById("myDiv")
    .classList.add("mystyle");
    var x = document.getElementById("myDiv").classList.length;
    console.log(x);
    // nous affichera 1 car il y a la classe mystyle d'ajoutée
    var y = document.getElementById("myDiv").classList.contains("mystyle");
    console.log(y);
    // nous retourne true car on a bien la classe spécifiée au clic sur le bouton
}
// ---------------------------------------------------------
var x = document.getElementById("myDiv").classList.length;
console.log(x);
// nous retourne le nombre de classes qu'a l'ID myDiv, ici 0 car en dehors de la fonction
// ---------------------------------------------------------
var y = document.getElementById("myDiv").classList.contains("mystyle");
console.log(y);
// nous retournera false en dehors de la fonction, car c'est le clic sur le bouton qui appelera la fonction qui ajoute la classe mystyle
// ---------------------------------------------------------
// on crée une fonction qui va être appelée au clic sur le bouton Affiche ton Prenom
function affichePrenom(){
    // on crée la variable a qui va récupérer la valeur de l'input prenom (id prenom)
    var a = document.getElementById("prenom").value;
    // on insère cette variable dans le HTML 
    document.getElementById("demo").innerHTML = a;
}
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------
// ---------------------------------------------------------