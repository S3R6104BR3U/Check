

const horasPorCurso = [0, 1, 1, 4, 5, 9, 9, 8, 2, 6, 1, 1, 4, 2, 6, 6, 4, 1, 6, 5, 8, 6, 1, 6];
let cont = 1;
var totalHoras = 0;

function somarhoras(){

    for (let i = 1; i <= 23; i++) {

        let id = document.getElementById("curso" + cont);
        let horas = horasPorCurso[i];
      
        if (id.checked){
            totalHoras = totalHoras + horas
            
        }
        cont++
        console.log(totalHoras)
        document.getElementById("horasEstudadas").value = totalHoras;
        let horasrest = 102 - totalHoras;
        document.getElementById("horasRestantes").value = horasrest; 
        
    }
}
   
    
    