import Inputmask from '../inputmask.es6.js';
import JustValidate from '../just-validate.js';

const formValidation = (inputName, inputTel) => {
  const telMask = new Inputmask('+7 (999)-999-99-99');
  telMask.mask(inputTel);

  const justValidate = new JustValidate('.form-modal');

  justValidate
      .addField('.modal-input-name', [
        {
          rule: 'required',
          errorMessage: 'Укажите ваше имя',
        },
        {
          rule: 'minLength',
          value: 2,
          errorMessage: 'Не короче 2 символов',
        },
      ])
      .addField('.modal-input-tel', [
        {
          rule: 'required',
          errorMessage: 'Укажите ваш телефон',
        },
        {
          validator(value) {
            const phone = inputTel.inputmask.unmaskedvalue();
            return !!(Number(phone) && phone.length === 10);
          },
          errorMessage: 'Телефон не корректный',
        },
      ]);
};


export default formValidation;
