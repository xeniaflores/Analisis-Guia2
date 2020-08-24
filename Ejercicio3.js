var Empleado = /** @class */ (function () {
    function Empleado(nombre, salario) {
        this.Nombre = nombre;
        this.Salario = salario;
    }
    //AFP 6.45% ISSS 4.5% Renta 12%
    Empleado.prototype.Deducciones = function () {
        var calculo;
        calculo = this.Salario - (this.Salario * 0.0645) - (this.Salario * 0.045) - (this.Salario * 0.12);
        return calculo;
    };
    return Empleado;
}());
