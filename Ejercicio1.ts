class Rombo{
    DiagonalVertical:number;
    DiagonalHorizontal:number;
    constructor(Vertical:number,Horizontal:number){
        this.DiagonalVertical=Vertical;
        this.DiagonalHorizontal=Horizontal;
    }
    Area():number{
        return this.DiagonalVertical*this.DiagonalHorizontal;
    }

}