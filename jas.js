let string = "Tannaz";
let array = [];
let result = " ";
for (let i = 0; i <= string.length; i++) {
    array[i] = string[string.length - i];
}
for (let l = 1; l < array.length; l++) {
    result = result + array[l];
}
console.log(result);