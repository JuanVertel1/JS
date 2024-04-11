/* function suma (a,b){
    resultado1= a + b
    console.log(resultado)
}
suma(22,5) */



const inputbox = document.querySelector(".inputbox");
const botones = document.querySelectorAll(".btn");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
        if (boton.id === "btn-limpiar") {
            inputbox.textContent = "";
            return;
        }

        if (boton.id === "btn-borrar") {
            inputbox.textContent = inputbox.textContent.slice(0, -1);
            return;
        }

        if (boton.id === "btn-igual") {
            let operation1 = new calculator(inputbox.textContent);

            console.log(inputbox.textContent);
            inputbox.textContent= operation1.resultado();
            return;
        }

        const botonApretado = boton.textContent;
        inputbox.textContent += botonApretado;

    })
})



//Como hacer una clase 
class calculator {

    constructor(operation) {
        this.operation = operation;
    }
    resultado() {
        return eval(this.operation);



    }



}



let operation2 = new calculator(5 - 8);

console.log(operation2);


