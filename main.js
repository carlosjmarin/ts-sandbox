var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
var CarLambo = 0;
var CarFerrari = 1;
var CarTesla = 2;
var Car;
(function (Car) {
    Car[Car["Lambo"] = 0] = "Lambo";
    Car[Car["Ferrari"] = 1] = "Ferrari";
    Car[Car["Tesla"] = 2] = "Tesla";
})(Car || (Car = {}));
;
