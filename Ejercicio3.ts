class Empleado{
    Nombre:string;
    Salario:number;
    constructor(nombre:string,salario:number){
        this.Nombre=nombre;
        this.Salario=salario;
    }
    //AFP 6.45% ISSS 4.5% Renta 12%
    Deducciones():number{
        var calculo:number;
        calculo= this.Salario-(this.Salario*0.0645)-(this.Salario*0.045)-(this.Salario*0.12);
        return calculo;
    }
}
