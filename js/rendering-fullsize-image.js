import {getUserPhots} from './data.js';
const usersPhoto = getUserPhots();

const renderingFullsizeImage = () => {

//Полноэкранный показ изображения - контейнер
const bigPicture = document.querySelector('.big-picture');






const fragment = document.createDocumentFragment();

    usersPhoto.forEach((value) => {
        // Клонируем элемент со всеми "внутренностями"
        const clonedElement = bigPicture.cloneNode(true);
        //Адрес изображения url подставьте как src изображения внутри блока
        const bigPictureImg = clonedElement.querySelector('.big-picture__img');
        //Количество лайков likes подставьте как текстовое содержание элемента
        const likesСount = clonedElement.querySelector('.likes-count');
        //Количество комментариев comments подставьте как текстовое содержание элемента
        const commentsСount = clonedElement.querySelector('.comments-count');
        //?????Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments
        //  <li class="social__comment">
        //     <img
        //         class="social__picture"
        //         src="{{аватар}}"
        //         alt="{{имя комментатора}}"
        //         width="35" height="35">
        //     <p class="social__text">{{текст комментария}}</p>
        //  </li>
        const socialComments = clonedElement.querySelector('.social__comments');
        //Описание фотографии description вставьте строкой в блок .social__caption
        const socialCaption = clonedElement.querySelector('.social__caption');

        bigPictureImg.src = value.avatar;
        likesСount.textContent = value.likes;
        commentsСount.textContent = value.comments.length;
        socialCaption.textContent = value.description;

        fragment.appendChild(clonedElement);
    });
    bigPicture.appendChild(fragment);
};