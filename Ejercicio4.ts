class Calculadora{
    Numero1:number;
    Numero2:number;

    constructor(n1:number,n2:number){
        this.Numero1=n1;
        this.Numero2=n2;
    }

    OperacionesBasicas(operacion:string):void{
        switch(operacion){
            case "+":
                console.log("El resultado es: "+ (this.Numero1+this.Numero2).toString() );
                break;
            case "-":
                console.log("El resultado es: "+ (this.Numero1-this.Numero2).toString());
                break;
            case "*":
                console.log("El resultado es: "+ (this.Numero1*this.Numero2).toString());
                break;
            case "/":
                if(this.Numero2!=0){
                console.log("El resultado es: "+ (this.Numero1/this.Numero2).toString());
                }
                else{console.log("el segundo numero debe ser diferente de 0");
                }
                break;
            default:
                console.log("Solo esta permitido + - * /");
                break;
        }
    }
}