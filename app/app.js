/*

Applicazione senza controllo sui valori passanti tramite prompt

var name= prompt('inserisci il tuo nome')
var cognome= prompt('inserisci il tuo cognome')
var colore= prompt('Qual "è" il tuo colore preferito?')

console.log(name+cognome+colore)

if(name==null || cognome==null || colore==null){
    alert('inserisci credenziali valide!!')
}

*/

/* Applicazione con un 'minimo' di controllo sui valori passanti tramite prompt */

var firsrName= prompt('Inserisci il tuo nome')
var lastName= prompt('Inserisci il tuo cognome')
var color= prompt('Qual "è" il tuo colore preferito?')

if(isNaN(firsrName) && isNaN(lastName) && isNaN(color)){
    console.log(firsrName+lastName+color)
}else if(firsrName==null || lastName==null || color==null){
    alert('inserisci credenziali valide!!')
}else{
    alert('Formato valore non valido, inserisci solo valori di tipo stringa di testo!')
}
