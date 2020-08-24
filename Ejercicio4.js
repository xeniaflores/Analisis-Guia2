var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.Numero1 = n1;
        this.Numero2 = n2;
    }
    Calculadora.prototype.OperacionesBasicas = function (operacion) {
        switch (operacion) {
            case "+":
                console.log("El resultado es: " + (this.Numero1 + this.Numero2).toString());
                break;
            case "-":
                console.log("El resultado es: " + (this.Numero1 - this.Numero2).toString());
                break;
            case "*":
                console.log("El resultado es: " + (this.Numero1 * this.Numero2).toString());
                break;
            case "/":
                if (this.Numero2 != 0) {
                    console.log("El resultado es: " + (this.Numero1 / this.Numero2).toString());
                }
                else {
                    console.log("el segundo numero debe ser diferente de 0");
                }
                break;
            default:
                console.log("Solo esta permitido + - * /");
                break;
        }
    };
    return Calculadora;
}());
