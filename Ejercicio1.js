var Rombo = /** @class */ (function () {
    function Rombo(Vertical, Horizontal) {
        this.DiagonalVertical = Vertical;
        this.DiagonalHorizontal = Horizontal;
    }
    Rombo.prototype.Area = function () {
        return this.DiagonalVertical * this.DiagonalHorizontal;
    };
    return Rombo;
}());
