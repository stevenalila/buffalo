function myfunction(type1, type2) {
    var a = type1.MyMethod("A", 12);
    var b = type1.MyMethod2();
}
var Customer = /** @class */ (function () {
    function Customer() {
    }
    return Customer;
}());
var c = new Customer();
myFunction(c, c);
