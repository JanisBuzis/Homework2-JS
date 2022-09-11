//1 Задание
let square = function (num3) {
    let result3 = ''
    result3 = num3 ** 2
    return result3
}
console.log(square(6))

//2 Задание
let priceMessage = function (price) {
    console.log ('Данный товар стоит' + ' ' + price + ' ' + 'рублей')
}
priceMessage(13000)

//3 Задание
let power = function (num1) {
    let result = ''
    for (let i = 1; i <= 3; i++) {
        result = num1 ** i
        console.log (result * result)
    }
}
power (3)

//4 Задание
function handler (num2) {
    let result1 = ''
        for (let j = 1; j <= 10; j++) {
            result1 = num2 * j
            console.log ( num2 + '*' + j + '=' + result1)
        }        
}
handler(3)


