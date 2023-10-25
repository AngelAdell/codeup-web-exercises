(function() {
    "use strict";

    // create a circle object

   var circle = {};

   circle.radius = 5;

       // hint: area = pi * radius^2
        circle.getArea = function() {
            return Math.PI * this.radius**2;
        }

         circle.round = function (doRounding) {
            if (doRounding) {
                return Math.round(this.getArea());
            } else {
                return this.getArea();
            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
        }
    };

    // log info about the circle
    console.log("Raw circle information" + circle.getArea(false));
    console.log("Circle information rounded to the nearest whole number" + circle.round(true));

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    // log info about the circle
    console.log ('Radius ', circle.radius);
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
