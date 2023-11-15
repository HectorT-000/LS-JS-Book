const CASE_NUMBER = 4936;

let thousandsPlace = parseInt(CASE_NUMBER / 1000);
console.log(thousandsPlace);

let hundredsPlace = parseInt((CASE_NUMBER - (thousandsPlace * 1000)) / 100);
console.log(hundredsPlace);

let tensPlace = parseInt((CASE_NUMBER - (Number(`${thousandsPlace}${hundredsPlace}00`))) / 10);
console.log(tensPlace);

let onesPlace = (CASE_NUMBER - (Number(`${thousandsPlace}${hundredsPlace}${tensPlace}0`)));
console.log(onesPlace);