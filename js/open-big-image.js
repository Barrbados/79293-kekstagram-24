import {data} from './data.js';

export const fn2 = () => {
  const socialСommentСount = document.querySelector('.social__comment-count');
  const commentsLoader = document.querySelector('.comments-loader');
  const trumbNails = document.querySelectorAll('.picture__img');
  const bigPicture = document.querySelector('.big-picture');
  const bodyElement = document.querySelector('body');
  const bigpictureCancel = document.querySelector('.big-picture__cancel');

  console.log('trumbNails', trumbNails);
  trumbNails.forEach((elm) => {

    elm.addEventListener('click', (evt) => {
      evt.preventDefault();
      console.log('evt.target', evt.target.id);
      const targetId = evt.target.id;
      const dataItem = data.find((val) => `${val.id}` === targetId);
      console.log('data', data);

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
