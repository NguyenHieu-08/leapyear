let year = parseInt(prompt("Enter a year"));
let isLeapYear = false;

let four = year % 4 == 0;
let onehundred = year % 100 == 0;
let fourhundred = year % 400 == 0;

if (four) {
    if (onehundred) {
        if (fourhundred) {
            isLeapYear = true;
        }
    } else {
        isLeapYear = true;
    }
}

if (isLeapYear) {
    alert(year + " is a leap year");
} else {
    alert(year + " is NOT a leap year");
}