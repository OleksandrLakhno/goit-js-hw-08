import throttle from "lodash.throttle";

const formData = {};

const form = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const storageElem = {
  email: '',
  message: '',
};
form.addEventListener('submit', formSubmit);
form.addEventListener('input',throttle(formInput,500));

populateTextInput();

function formSubmit(event) {
  event.preventDefault();
  if (email.value === '' || message.value === '') {
    alert('Please ! Fill all the fields ! Thanks');
    return;
  }
  console.log(formData);
  event.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function formInput(event) {
 formData[event.target.name] = event.target.value;

  const formValue = event.target.value;

  const currentLocalStorage = localStorage.getItem('feedback-form-state');

  const parseLocalStorage = JSON.parse(currentLocalStorage);

  if (!parseLocalStorage) {
    localStorage.setItem('feedback-form-state', JSON.stringify(storageElem));

    const locStor = localStorage.getItem('feedback-form-state');
    const parseLocalStorage = JSON.parse(locStor);
    if (event.target.name === 'email') {
      parseLocalStorage.email = formValue;
    } else if (event.target.name === 'message') {
      parseLocalStorage.message = formValue;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(parseLocalStorage));
  } else {
    if (event.target.name === 'email') {
      parseLocalStorage.email = formValue;
    } else if (event.target.name === 'message') {
      parseLocalStorage.message = formValue;
    }
    localStorage.setItem('feedback-form-state', JSON.stringify(parseLocalStorage));
  }
    console.log(formData);
}

function populateTextInput() {
    const userData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (!userData) return; {
    form.email.value = userData.email;
    form.message.value = userData.message;
    // formData.email = userData.email;
    //    formData.message = userData.message;
   }
}