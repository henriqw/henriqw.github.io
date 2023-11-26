// pokemon_data
let pokeTeam = [
 ["Squirtle" , "Charmander", "Bulbasaur" , "Pidgeot" , "Electabuzz" , "Gengar" ],
 ['"Whiplash!"' , '"Amadeus"' , '"Green"' , '"Bird"' , '"Bolt"' , '"Ghost"' ],
 [7 , 12 , 14 , 38 , 22, 30],
 [" Female" , " Male", " Female" , " Female" , " Male" , "n Undefined" ],
 [true , false , true , false , false , true ]
]
let a

console.log ("Your " + pokeTeam[0][2] + ", Whose name is " + pokeTeam[1][2] + " is a" + pokeTeam[3][2] + " and it is at level " + pokeTeam[2][2] + ".");

if (pokeTeam[4][2] === true){
    console.log ("It's ready for battle also.")
} else {
    console.log ("It needs healing.")
}
b = "b"
switch(b){
    case "b":
        console.log("batata")
        break
    case "l":
        console.log("laranja")
        break
    case "q":
        console.log("queijo")
        break            
}
a = "l"
switch(a){
    case "b":
        console.log("batata")
        break
    case "l":
    case "c":    
        console.log("laranja")
        break
    case "q":
        console.log("queijo")
        break 
    default:
        console.log("generic")               
}

for (let i = 0; i <=8; i +=2){
    console.log(i)
}
let c = 0
while (c < 3){
    console.log (c)
    c++
}
let d = 0
do {
    console.log (d)
    d++
} while (d < 3)

// igual
//=== >= <=
// diferente
//!=
//condicional
// e or not
//&& || !
//atribuicao
//+= incrementar
//-= subtrair etc
//++ incrementa 1
//-- subtrai 1
