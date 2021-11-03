import {data} from './data.js';

export const fn2 = () => {
  const socialСommentСount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const trumbNails = document.querySelectorAll('.picture__img');
  const bigPicture = document.querySelector('.big-picture');
  const bigPictureImg = document.querySelector('.big-picture__img');
  const bodyElement = document.querySelector('body');
  const bigpictureCancel = document.querySelector('.big-picture__cancel');


  trumbNails.forEach((elm) => {

    elm.addEventListener('click', (evt) => {
      evt.preventDefault();
      const targetId = evt.target.id;
      const dataItem = data.find((val) => `${val.id}` === targetId);//с этим мне помогли
      const img = bigPicture.querySelector('img');
      const likesСount = bigPicture.querySelector('.likes-count');
      const commentsСount = bigPicture.querySelector('.comments-count');
      const socialPicture = bigPicture.querySelector('.social__picture');
      
      // const dataItemComments = dataItem(comments).find((val) => `${val.id}` === targetId);
      //?????Список комментариев под фотографией: комментарии должны вставляться в блок .social__comments
      //  <li class="social__comment">
      //     <img
      //         class="social__picture"
      //         src="{{аватар}}"
      //         alt="{{имя комментатора}}"
      //         width="35" height="35">
      //     <p class="social__text">{{текст комментария}}</p>
      //  </li>
      const socialComments = bigPicture.querySelector('.social__comments');

      //Описание фотографии description вставьте строкой в блок .social__caption
      const socialCaption = bigPicture.querySelector('.social__caption');

      img.src = dataItem.avatar;
      likesСount.textContent = dataItem.likes;
      commentsСount.textContent = dataItem.comments.length;
      socialComments.value = dataItem.comments.length;
      socialCaption.textContent = dataItem.description;
      socialPicture.src = dataItem.avatar;
      // socialComments.src = dataItemComments.avatar;






      console.log('dataItem', dataItem);
      bigPicture.classList.remove('hidden');

      socialСommentСount.classList.add('hidden');
      commentsLoader.classList.add('hidden');
      bodyElement.classList.add('modal-open');

      bigpictureCancel.addEventListener('click', () => {
        bigPicture.classList.add('hidden');

        socialСommentСount.classList.remove('hidden');
        commentsLoader.classList.remove('hidden');
        bodyElement.classList.remove('modal-open');
      });
    });
  });


  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      bigPicture.classList.add('hidden');

      socialСommentСount.classList.remove('hidden');
      commentsLoader.classList.remove('hidden');
      bodyElement.classList.remove('modal-open');
    }
  });
};
