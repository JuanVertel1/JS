class calculator{
    constructor(inputbox){
this.inputbox = inputbox;
    }
    
    suma(){
        return eval(inputbox);
     }
    
    resta(){}
    multiplicacion(){}
    divion(){}

}

let calculator1 = new calculator('5+2');
console.log(calculator1.suma())