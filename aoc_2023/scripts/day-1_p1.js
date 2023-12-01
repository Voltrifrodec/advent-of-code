const fs = require('fs');

/// Part 1
/* Workflow - Part 1
 * 0. Try to replicate result of the example input.
 * 1. Read text file and store it as array (Array A).
 * 2. Filter out all non-digit characters into new array (Array B).
 *  - always get the first and last digit (for example, '12345' → '15') 
 *  - if there's only one digit, double it (for example, '7' → '77')
 * 3. Sum the total amount of Array B and return value.
 */
const trebuchet =(filePath) => {

    console.log('starting...');

    if(filePath == null || !filePath.length) {
        return 'Invalid path to the data file!';
    }

    // 0. Try to replicate result of the example input.
    var exampleInput = `1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`;
    var exampleFiltered = exampleInput.split('\n').map(value => { 
        // Replace all non-digit characters with ''
        value = value.replace(/[^\d]/g,'');
        // Check the length -- if length > 2, get first and last; if length == 1, double the digit; else the two-digi number
        if(value.length > 2) {
            value = value[0] + value[value.length - 1];
            return parseInt(value);
        }
        if(value.length == 1) {
            return parseInt(value + value);
        }
        return parseInt(value);
    });
    var exampleSum = exampleFiltered.reduce((prev, curr) => prev + curr);
    console.log(`Example result:\n${exampleInput}$\n filtered: ${exampleFiltered}\n output: ${exampleSum}`);



    // 1. Read text file and store it as array (Array A).
    var array_a = fs.readFileSync(filePath, 'utf-8');
    array_a = array_a.split('\n');
    console.log(array_a.length);

    // 2. Filter out all non-digit characters into new array (Array B).
    var array_b = array_a.map(value => {
        value = value.replace(/[^\d]/g, '');    // Replace all non-digit characters with ''
        // Check the length and set the number according to condition
        if(value.length > 2) {
            value = value[0] + value[value.length - 1];
            return parseInt(value);
        }
        if(value.length == 1) {
            return parseInt(value + value);
        }
        return parseInt(value);
    });

    // 3. Sum the total amount of Array B and return value.
    var sum = array_b.reduce((prev, curr) => prev + curr);
    return sum;


}

const filePath = process.argv[2];

test1 = trebuchet(filePath);
console.log(test1);