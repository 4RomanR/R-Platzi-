function adultos (edades){
    let aux = false;
    for(var i = 0; i < edades.length; i++){ 
    if (edades[i] >=18 && edades[i] <= 70){
    aux = true
    }else{
    aux = false
      break;
          }   
        }
    return aux
      }

      console.log(adultos([28, 45, 19, 21, 18, 69]))