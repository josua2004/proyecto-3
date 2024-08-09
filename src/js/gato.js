
// llamamos los ID creados de HTML
const celdas = document.querySelectorAll(".celdas")
const bordes = document.getElementById("bordes")
const jugador1 = document.getElementById("jugador1")
const jugador2 = document.getElementById("jugador2")
const boton1 = document.getElementById("boton1")
const boton2 = document.getElementById("boton2")
const etiqueta = document.getElementById("texto")



//Creamos un local storage para permitir que se almacenen los puntos
//de cada jugador.
let gatito = localStorage.getItem("gatito")||[]
let perrito = localStorage.getItem("perrito")||[]
let sumaX = gatito
let sumaO = perrito

jugador1.innerHTML = sumaX
jugador2.innerHTML = sumaO




//cracion de un ciclo for para permitir o traer todos los divs creados
// en HTML
for (let index = 0; index < celdas.length; index++) {
    //Creamos un evento
    celdas[index].addEventListener("click", function () {

        
       
        //Validamos las letras para que aparezcan en pantalla
        celdas[index].innerHTML = "😸"
        celdas[index].style.background = ""
        
       
        //validacion para permitir que la letra no caiga encima de la otra
        //A continuacion implementamos un ciclo for y una condicional
        let Lista = []

        for (let index = 0; index < celdas.length; index++) {

            if (celdas[index].textContent === "") {
                Lista.push(index)
                
            }

        }
            console.log(Lista);
            
           //creamos el numero aleatorio
           let aleatorio = parseInt(Math.random()* Lista.length)
           console.log(aleatorio);
           
           let num = Lista[aleatorio]

           celdas[num].innerHTML= "🐺"
           celdas[num].style.background = ""
        
          
         
         //creamos condicionales en cada posicion de la matriz
         //para verificar como ganador la letra X
         if (celdas[0].textContent ==="😸" && celdas[1].textContent ==="😸" && celdas[2].textContent ==="😸") {
            alert("El gatito a ganado 😸")
            sumaX++

         }else{
            if (celdas[3].textContent ==="😸" && celdas[4].textContent ==="😸" && celdas[5].textContent ==="😸") {
            texto.innerHTML = "El gatito a ganado 😸"
            sumaX++

            }else{
                if (celdas[6].textContent ==="😸" && celdas[7].textContent ==="😸" && celdas[8].textContent ==="😸") {
                    alert("El gatito a ganado")
                    sumaX++

                }else{
                    if (celdas[0].textContent ==="😸" && celdas[3].textContent ==="😸" && celdas[6].textContent ==="😸") {
                        alert("El gatito a ganado")
                        sumaX++

                    }else{
                        if (celdas[1].textContent ==="😸" && celdas[4].textContent ==="😸" && celdas[7].textContent ==="😸") {
                            alert("El gatito a ganado")
                            sumaX++

                        }else{
                            if (celdas[2].textContent ==="😸" && celdas[5].textContent ==="😸" && celdas[8].textContent ==="😸") {
                                alert("El gatito a ganado")
                                sumaX++

                            }else{
                                if (celdas[0].textContent ==="😸" && celdas[4].textContent ==="😸" && celdas[8].textContent ==="😸") {
                                    alert("El gatito a ganado")
                                    sumaX++

                                }else{
                                    if (celdas[2].textContent ==="😸" && celdas[4].textContent ==="😸" && celdas[6].textContent ==="😸") {
                                        alert("El gatito a ganado")
                                        sumaX++

                                    }  
                                    
                                }
                            }
                        }
                    }
                }
            }
         }
         
         //localstorage para lanzar
        localStorage.setItem("gatito", JSON.parse(sumaX))
        //Crear una condicional para identificar como ganador la letra "O"
         if (celdas[0].textContent ==="🐺" && celdas[1].textContent ==="🐺" && celdas[2].textContent ==="🐺") {
            alert("El lobito a ganado")
            sumaO++

         }else{
            if (celdas[3].textContent ==="🐺" && celdas[4].textContent ==="🐺" && celdas[5].textContent ==="🐺") {
                alert("El lobito a ganado")
                sumaO++

            }else{
                if (celdas[6].textContent ==="🐺" && celdas[7].textContent ==="🐺" && celdas[8].textContent ==="🐺") {
                    alert("El lobito a ganado")
                    sumaO++

                }else{
                    if (celdas[0].textContent ==="🐺" && celdas[3].textContent ==="🐺" && celdas[6].textContent ==="🐺") {
                        alert("El lobito a ganado")
                        sumaO++

                    }else{
                        if (celdas[1].textContent ==="🐺" && celdas[4].textContent ==="🐺" && celdas[7].textContent ==="🐺") {
                            alert("El lobito a ganado")
                            sumaO++

                        }else{
                            if (celdas[2].textContent ==="🐺" && celdas[5].textContent ==="🐺" && celdas[8].textContent ==="🐺") {
                               alert("El lobito a ganado") 
                               sumaO++

                            }else{
                                if (celdas[0].textContent ==="🐺" && celdas[4].textContent ==="🐺" && celdas[8].textContent ==="🐺") {
                                    alert("El lobito a ganado")
                                    sumaO++

                                }else{
                                    if (celdas[2].textContent ==="🐺" && celdas[4].textContent ==="🐺" && celdas[6].textContent ==="🐺") {
                                        alert("El lobito a ganado")
                                        sumaO++
        
                                    }
                                }
                            }
                        }
                    }
                }
            }
         }

         //localstorage para lanzar
         localStorage.setItem("perrito", JSON.parse(sumaO))
      
        
    })
    
}
    
boton1.addEventListener("click", function () {
   location.reload()
    
})

boton2.addEventListener("click", function () {
   localStorage.clear()    
   alert("Nueva partida")
})


