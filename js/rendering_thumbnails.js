import {getUserPhots} from './data.js';

export const renderingTrumbnails = () => {
  const usersPhoto = getUserPhots();
  // Контейнер для карточек
  const pictures = document.querySelector('.pictures');

  // Находим фрагмент с содержимым темплейта
  const imageTemplate = document.querySelector('#picture').content;
  // В фрагменте находим нужный элемент
  const newImageTemplate = imageTemplate.querySelector('.picture');

  const fragment = document.createDocumentFragment();


  usersPhoto.forEach((value) => {
    // Клонируем элемент со всеми "внутренностями"
    const clonedElement = newImageTemplate.cloneNode(true);
    const img = clonedElement.querySelector('.picture__img');
    const commentElm = clonedElement.querySelector('.picture__comments');
    const likeElm = clonedElement.querySelector('.picture__likes');

    img.src = value.avatar;
    commentElm.textContent = value.comments.length;
    likeElm.textContent = value.likes;


    fragment.appendChild(clonedElement);

  });
  pictures.appendChild(fragment);
};

