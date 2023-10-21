(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    const familyNames = ['Angel','Ashley','Amber','Darah']; // an array of four names stored in a variable
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
console.log(familyNames.length); // 4
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(familyNames[0]); // 1
    console.log(familyNames[1]); // 2
    console.log(familyNames[2]); // 3
    console.log(familyNames[3]); // 4
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    for (let i = 0; i < familyNames.length; i++){
        console.log ('The Adell girls names are ' + familyNames[i] );
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
familyNames.forEach(name => (console.log(`Here are the Adell sister names: ${name}.`)));
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */


    const arr = [familyNames];
        function firstName(arr) {
            if (arr.length > 0) {
                return arr[0];
            } else {
                return undefined; // or handle this case as you prefer
            }
        }
    console.log(firstName([1, 2, 3, 4])); // returns Angel

        function secondName(arr) {
            if (arr.length > 1) {
                return arr[1];
            } else {
                return undefined; // or handle this case as you prefer
            }
        }
    console.log(secondName([1, 2, 3, 4])); // returns Ashley

        function lastName(arr) {
            if (arr.length > 0) {
                return arr[arr.length - 1];
            } else {
                return undefined; // or handle this case as you prefer
            }
        }
    console.log(lastName([1, 2, 3, 4])); // returns Darah