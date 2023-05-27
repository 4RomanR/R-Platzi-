function letras(string){
    var cont = 0;
    for (var i = 0; i < string.length; i++){
        if(string[i]==='a'){
            console.log(letras(string[a]));
            cont++;
        }
    }
    return cont;
}

console.log(letras("Estoy ejercitándome los miércoles y jueves") === 6); 
console.log(letras("Eeeeh!, que alegría verlos amigos mios")  === 6); 
console.log(letras("Ejemplares son las personas de este hermoso pueblo")  === 8); 
console.log(letras("Ahora qué?") === 0); 
console.log(letras("LOs elefantes son enormes") === 5)



function message (array){
    var stringmessage = array.join(" ");
    return stringmessage;
}
console.log(message(["Estoy", "aprendiendo", "Java", "Script"]));
console.log(message(["El", "método", "join", "me", "permite", "unir", "elementos"]));
console.log(message(["Java", "Script", "es", "muy", "útil"]))


// function contrasena (stringa){
//     var password = '';
//     for(var i= 0; i< stringa.length;i++){
//         var ch = string[i].toLowerCase();
//         if(ch === ' '){
//             char = '';
//         }else if(ch === '')
//     }
//     var stringb = stringa.toUpperCase().join("").replace("a", "4").replace("e", "3").replace("i", "1").replace("o", "0");
//     return stringb
// }
// console.log(contrasena("hola")); 
// console.log(contrasena("esta es una prueba"));
// console.log(contrasena(""));

// ----------------------E   X   A   M   E   N


function duplicar (array){
    var num = array.push;
    for(var i = 0; i < num.length; i++){
        if(num[i]>0){
            num[i]*2
            count++
            
        }
    }
    
    return count
}

function message (array){
    var count = array.split(" ");
    return count
}


function generatePassword (string){
    var password = "";
    for(var i = 0; i < string.length; i++){
        var char = string[i].toLowerCase;
        if(char === ' '){
            char =  '';}else if (char==='a'){
            char = 4;}else if (char==='e'){
            char = 3}else if (char==='i'){
            char = 1;}else if (char==='o'){
            char = 0;}
            password+= char


            }
        }

    }
}

// ---------------------- 1 --------------------
function calcularImpuestos (edad, ingresos){
    if(edad >=18 && ingresos >= 1000){
        console.log(ingresos*40/100);
    }else{
        console.log(0)
    }
}

console.log(calcularImpuestos());


// ---------------------- 2 --------------------
function asteriscos (str){
    var count = 0;
    for (var i = 0; i < str.length; i++){

        if(str[i]==='*'){
            count++
        }

    }
    return count;
}


var recipe = {
    "leche en polvo": "1 litro",
    "chocolate en barra": "3 barras",
    "azucar": "3 gramos"
}

for (var text in recipe) {
    if (recipe.hasOwnProperty(text)) {
        console.log("Agrega " + recipe[text] + " de " + recipe)
    }
}

recipe.mixIngredients = function() {
    return "Mezclando los ingredientes ";
}
console.log(recipe.mixIngredients())



const guitarras = {
    guitarra1: "verde",
    guitarra2: "azul",
    guitarra3: "rosa",
    guitarra4: "blanca"
}

for (let k in guitarras) {
    console.log("Este es el color " + guitarras[k] + " de la guitarra " + k)
}