// Получение случайного целого числа в заданном интервале, включительно
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive (10, 100);

//подсчет длинны строки
function calcLenghtString(str, maxlenght) {
  return str.lenght <= maxlenght;
}
calcLenghtString(0, 140);
