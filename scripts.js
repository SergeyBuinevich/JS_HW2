document.write("<br><span style='color:red;font:20px Tahoma;'>1. Создайте переменные: name, age, city, phone, email, company; и получите через ф-цию prompt() соответствующие значения: ваше имя, возраст, город проживания и т.д. Выведите на экран фразу: «Меня зовут %Имя%. Мне %Возраст% лет. Я проживаю в городе %Город% и работаю в компании %Компания%. Мои контактные данные: %Телефон%, %Почта%.».</span>")

let name = prompt('Ваше имя?');
let age = prompt('Возраст?');
let city = prompt('Город проживания?');
let phone = prompt('Номер телефона?');
let email = prompt('Электронная почта?');
let company = prompt('Где работаете?');

document.write('<br><br> «Меня зовут ' + name + '. Мне ' + age + ' лет. Я проживаю в городе ' + city + ' и работаю в компании ' + company + '. Мои контактные данные: ' + phone + ', ' + email + '.»');

document.write("<br><br><span style='color:red;font:20px Tahoma;'>2 .Определите по введенному возрасту (исп. значение из задания 1) год рождения. Выведите на экран «%Имя% родился в %Год% году.».</span>")

let yearofbirth = 2021 - age;

document.write('<br><br>' + name + ' родился в ' + yearofbirth + ' году.')

document.write("<br><br><span style='color:red;font:20px Tahoma;'>4. Если переменная a больше нуля, то выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта при a, равном 1, 0, -3.</span>")

let c = 1;

document.write('<br><br>');
document.write(c > 0 ? 'Верно' : 'Неверно');

    c = 0;

document.write('<br>');
document.write(c > 0 ? 'Верно' : 'Неверно'); 

    c = -3;

document.write('<br>');
document.write(c > 0 ? 'Верно' : 'Неверно');

document.write("<br><br><span style='color:red;font:20px Tahoma;'>5. Создайте переменные a=10 и b=2. Выведите их сумму, разность, произведение, частное, а также, если сумма этих чисел больше 1, то возведите полученную сумму в квадрат.</span>");

let a = 10,
    b = 2,
    sum = a + b,
    diff = a - b,
    mult = a * b,
    quot = a / b,
    square = sum ** 2;

document.write('<br><br>'+ sum);
document.write('<br>'+ diff);
document.write('<br>'+ mult);
document.write('<br>'+ quot);

if (sum > 1) document.write('<br>'+ square);

document.write("<br><br><span style='color:red;font:20px Tahoma;'>6. Если переменная a (из задания 5) больше 2 и меньше 11, или переменная b (из задания 5) больше или равна 6 и меньше 14, то выведите 'Верно', в противном случае выведите 'Неверно'.</span>");

document.write('<br><br>');
document.write(a > 2 && a < 11 || b >= 6 && b < 14 ? 'Верно' : 'Неверно');

document.write("<br><br><span style='color:red;font:20px Tahoma;'>7. В переменной n лежит число от 0 до 59. Определите в какую четверть часа попадает это число (в первую, вторую, третью или четвертую).</span>");

let n = 17;
let answer = '';

switch(true) {
    case(n > 0 && n <= 15):
        answer = 'Первая четверть часа';
    break;
    case(n > 15 && n <= 30):
        answer = 'Вторая четверть часа';
    break;
    case(n > 15 && n <= 45):
        answer = 'Третья четверть часа';
    break;
    case(n > 45 && n <= 60):
        answer = 'Четвертая четверть часа';
    break;
}

document.write('<br><br>' + answer);

document.write("<br><br><span style='color:red;font:20px Tahoma;'>10. Напишите скрипт, который по введенному дню (исп. значение переменной из 8 задания) в году (например, 256) определит месяц (от 1 до 12) и пору года (зима, лето и т.д.). Скрипт определение поры года написать через switch.</span>");

let day = 11;
let monthNum = '';
let timeOfTheYear = '';

if (day > 0 && day <= 31) {
    monthNum = 1;
} else if (day > 31 && day <= 59) {
    monthNum = 2;
} else if (day > 59 && day <= 90) {
    monthNum = 3;
} else if (day > 90 && day <= 120) {
    monthNum = 4;
} else if (day > 120 && day <= 151) {
    monthNum = 5;
} else if (day > 151 && day <= 181) {
    monthNum = 6;
} else if (day > 181 && day <= 212) {
    monthNum = 7;
} else if (day > 212 && day <= 243) {
    monthNum = 8;
} else if (day > 243 && day <= 273) {
    monthNum = 9;
} else if (day > 273 && day <= 304) {
    monthNum = 10;
} else if (day > 304 && day <= 334) {
    monthNum = 11;
} else if (day > 334 && day <= 365) {
    monthNum = 12;
}

switch(true) {
    case(monthNum == 12 || monthNum == 1 || monthNum == 2):
    timeOfTheYear = 'Зима';
    break;
    case(monthNum == 3 || monthNum == 4 || monthNum == 5):
    timeOfThYear = 'Весна';
    break;
    case(monthNum == 6 || monthNum == 7 || monthNum == 8):
    timeOfTheYear = 'Лето';
    break;
    case(monthNum == 9 || monthNum == 10 || monthNum == 11):
    timeOfTheYear = 'Осень';
    break;
}

document.write('<br><br>' + monthNum + ' месяц');
document.write('<br>' + timeOfTheYear);