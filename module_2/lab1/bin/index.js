var Nuevo = (function () {
    function Nuevo() {
        this.d = new decodeURI();
    }
    //paint: comentario de método
    Nuevo.prototype.Paint = function () {
        alert("Pintando");
    };
    return Nuevo;
}());
