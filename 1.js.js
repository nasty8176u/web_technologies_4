"use strict";
const num = Number.parseFloat(prompt("Введите температуру в градусах Цельсия:"));
printTemperature(num);

function printTemperature(num) {
    alert(`Цельсия: ${num}, Фаренгейт ${((9/5)*num + 32).toFixed(1)}`);
}
