import { getRandomArrayElement, getRandomIntInclusive } from './utils.js';

const NAMES = [
  'Маша',
  'Петя',
  'Савелий',
  'Катя',
  'Кристина',
  'Денис',
  'Леонид',
  'Иван',
  'Светлана',
  'Павел',
  'Ирина',
  'Юлия',
  'Дарья',
  'Анастасия',
];

//description, строка — описание фотографии. Описание придумайте самостоятельно.
const DESCRIPTIONS = [
  'Отличный был день',
  'Это я вчера',
  'Очень красиво',
  'Лайкай меня',
  'Как Бузова',
];

//вам необходимо взять одно или два случайных предложения из представленных ниже:
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают.',
  'Как можно было поймать такой неудачный момент?!',
];

const getComments = (id) => ({
  id,
  name: getRandomArrayElement(NAMES),
  avatar: `img/avatar-${getRandomIntInclusive (1, 6)}.svg`,
  message: getRandomIntInclusive(0, 1)
    ? `${getRandomArrayElement(MESSAGES)} ${getRandomArrayElement(MESSAGES)}`
    : getRandomArrayElement(MESSAGES),
});

const getPhoto = (id) => ({
  id,
  name: getRandomArrayElement(NAMES),
  avatar: `img/avatar-${  getRandomIntInclusive (1, 6) }.svg`,
  comments:  Array.from({length: getRandomIntInclusive(1, 3)}, ( val, ind ) => getComments( ind + 1 )),
  likes: getRandomIntInclusive (15, 200),
  description: getRandomArrayElement(DESCRIPTIONS),
});

export const getUserPhots = () => Array.from({length: 25}, ( val, ind ) => getPhoto( ind + 1 ));
