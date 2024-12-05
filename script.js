const numbers = [-24, -11, 27, 29, -4, -28, -21, -14, 3, -8, 24, 19, -25, -2, -1, 11, 32, -31, 5];

/*
  // první ukol - vypsat vsechny cisla
numbers.forEach((vsechnyCisla) => {
    document.body.innerHTML += `<p>${vsechnyCisla}</p>`
})


// druhy ukol druha mocnina ze vsech cisel. Pro mocninu je vzorec číslo X číslo 
numbers.forEach(cislo => {
    const mocnina = cislo * cislo; 
    document.body.innerHTML += `<p>mocnina z ${cislo} je ${mocnina}</p>`
});


// treti ukol
const zapornaCisla = numbers.map(cislo => {
    return cislo < 0 ? cislo : ""})

zapornaCisla.forEach(cislo => {
    document.body.innerHTML += `<p>${cislo}</p>`
})



// ctvrty ukol - absolutni hodnota, tedy vsechny kladná čísla

const kladnaCisla = numbers.map(cislo => {
    return cislo > 0 ? cislo : ""})

kladnaCisla.forEach(cislo => {
    document.body.innerHTML += `<p>${cislo}</p>`
})



// paty ukol, vsechna suda cisla

const sudaCisla = numbers.map(cislo => {
   if (cislo % 2 === 0 ) {return cislo}
   else {return ""}
})

sudaCisla.forEach(cislo => {
    document.body.innerHTML += `<p>${cislo}</p>`
})



// sesty ukol, vsechna cisla jejichz absolutni hodnota je dělitelna 3

const absolutniCisla3 = numbers.map(cislo => {
    if (cislo % 3 === 0 ) {return cislo}
    else {return ""}
 })
 
 absolutniCisla3.forEach(cislo => {
     document.body.innerHTML += `<p>${cislo}</p>`
 })



 // sedmy ukol, vypsat jak daleko je každé číslo v seznamu od čísla 5

const vzdalenosti = numbers.map(cislo => {return (5 - cislo)})

vzdalenosti.forEach((vzdalenost, index) => {
    document.body.innerHTML += `<p>${numbers[index]} je vzdálené od 5 o ${vzdalenost}</p>`
})


// osmy ukol, druha mocnina vsech cisel vzdalenych od 5

const vzdalenosti = numbers.map(cislo => {return (5 - cislo)})

vzdalenosti.forEach(cislo => {
    const mocnina = cislo * cislo; 
    document.body.innerHTML += `<p>mocnina z ${cislo} je ${mocnina}</p>`
});


// devaty ukol Spočítejte, kolik je v seznamu záporných čísel.


const zapornaCisla = numbers.filter(cislo => cislo < 0)
const soucetZapornaCisla = zapornaCisla.length
document.body.innerHTML += `<p> počet záporných čísel je ${soucetZapornaCisla}</p>`



// desaty ukol. Součet všech čísel - nevím proč, ale v konzole mi to ukazuje výsledek -19 a nevím, kde je chyba?
  
let sum = 0;  

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i] 
}
console.log(sum) 

     
// jedenacty ukol, spocitejte prumer cisel. Tady mi taky nevychází správně výsledek, vyhazuje mi to -1 ?

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}
const prumer = sum / numbers.length
console.log(prumer)



// dvanáctý úkol, součet všech kladných čísel v poli. Tady mi to taky vyhazuje špatný výsledek..

  const kladnaCisla = numbers.filter(cislo => cislo > 0)
  console.log(kladnaCisla)

  
let sum = 0  
for (let i = 0; i < kladnaCisla.length; i++) {
  sum += kladnaCisla[i]  
}
console.log(sum)
*/
