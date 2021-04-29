let nbr1 = prompt("veuillez saisir un chiffre");
let operateur = prompt ("veuillez saisir un operateur");
let nbr2 = prompt ("veuillez saisir un chiffre");
switch (operateur) {
    case "+":
        alert(nbr1+nbr2);   
        break;
    case "-":
        alert(nbr1-nbr2);
        break;
    case "*":
        alert(nbr1*nbr2);
        break;
    case "/":
        alert(nbr1/nbr2);
        break;

    default :
        alert("Veuillez mettre un operateur correct.")
        break;
}