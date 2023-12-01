# --- Day 1: Trebuchet?! ---
[Link to the page](https://adventofcode.com/2023/day/1)

## Task
Something is wrong with global snow production, and you've been selected to take a look. The Elves have even given you a map; on it, they've used stars to mark the top fifty locations that are likely to be having problems.

You've been doing this long enough to know that to restore snow operations, you need to check all *fifty stars* by December 25th.

Collect stars by solving puzzles. Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first. Each puzzle grants *one star*. Good luck!

You try to ask why they can't just use a [weather machine](https://adventofcode.com/2015/day/1) ("not powerful enough") and where they're even sending you ("the sky") and why your map looks mostly blank ("you sure ask a lot of questions") and hang on did you just say the sky ("of course, where do you think snow comes from") when you realize that the Elves are already loading you into a [trebuchet](https://en.wikipedia.org/wiki/Trebuchet) ("please hold still, we need to strap you in").

As they're making the final adjustments, they discover that their calibration document (your puzzle input) has been ***amended*** by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.

The newly-improved calibration document consists of lines of text; each line originally contained a specific ***calibration value*** that the Elves now need to recover. On each line, the calibration value can be found by combining the ***first digit*** and the ***last digit*** (in that order) to form a single ***two-digit number***.

For example:

```
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
```
In this example, the calibration values of these four lines are `12`, `38`, `15`, and `77`. Adding these together produces `142`.

Consider your entire calibration document. ***What is the sum of all of the calibration values?***


## Solution

### JavaScript
#### Part 1
```js
const fs = require('fs');

const trebuchet =(filePath) => {

    if(filePath == null || !filePath.length) {
        return 'Invalid path to the data file!';
    }

    var array_a = fs.readFileSync(filePath, 'utf-8');
    array_a = array_a.split('\n');
    
    var array_b = array_a.map(value => {
        value = value.replace(/[^\d]/g, '');
        if(value.length > 2) {
            value = value[0] + value[value.length - 1];
            return parseInt(value);
        }
        if(value.length == 1) {
            return parseInt(value + value);
        }
        return parseInt(value);
    });

    var sum = array_b.reduce((prev, curr) => prev + curr);
    return sum;

}

const filePath = process.argv[2];
trebuchet(filePath);
```
Usage:
```sh
node ./scripts/aoc_2023_day-1_part-1.js './data/data_day-1_part-1.txt'
```

[View file](./scripts/aoc_2023_day-1_part-1.js) [View data](./data/data_day-1_part-1.txt)