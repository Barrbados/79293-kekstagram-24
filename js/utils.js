// Получение случайного целого числа в заданном интервале, включительно
export const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
};

//подсчет длинны строки
export const calcLengthString = (str, maxLength) => str.length <= maxLength;

export const getRandomArrayElement = (array) => array[getRandomIntInclusive(0, array.length - 1)];


