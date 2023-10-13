const signupForm = document.getElementById('signup-form');
const nameInput = document.getElementById('login-form__name');
const nicknameInput = document.getElementById('login-form__nickname');
const emailInput = document.getElementById('login-form__email');
const passwordInput = document.getElementById('login-form__password');
const checkPasswordInput = document.getElementById(
  'login-form__check-password'
);
const signUpButton = document.querySelector('.login-form__sign-up-btn');

/* ERROR_MESSAGE */
const nameError = document.querySelector('.failure-name-message');
const nicknameError = document.querySelector('.failure-nickname-message');
const emailError = document.querySelector('.failure-email-message');
const passwordError = document.querySelector('.failure-password-message');
const duplicatePasswordError = document.querySelector(
  '.failure-check-password-message'
);

/* SUCCESS_MESSAGE */
const nameSuccess = document.querySelector('.success-name-message');
const nicknameSuccess = document.querySelector('.success-nickname-message');
const emailSuccess = document.querySelector('.success-email-message');
const passwordSuccess = document.querySelector('.success-password-message');
const duplicatePasswordSuccess = document.querySelector(
  '.success-check-password-message'
);

// MODAL
const modalWrapper = document.querySelector('.modal-wrapper');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.modal-close');

// EMAIL PASSWORD RegEx
const emailRegEx = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/;

signUpButton.addEventListener('click', () => {
  // Initial State
  let hasError = false;

  if (!checkNameError()) {
    nameError.classList.add('hide');
    nameSuccess.classList.remove('hide');
  } else {
    hasError = true;
    nameError.classList.remove('hide');
    nameSuccess.classList.add('hide');
  }

  if (!checkNickNameError()) {
    nicknameError.classList.add('hide');
    nicknameSuccess.classList.remove('hide');
  } else {
    hasError = true;
    nicknameError.classList.remove('hide');
    nicknameSuccess.classList.add('hide');
  }

  if (!checkEmailError()) {
    emailError.classList.add('hide');
    emailSuccess.classList.remove('hide');
  } else {
    hasError = true;
    emailError.classList.remove('hide');
    emailSuccess.classList.add('hide');
  }

  if (!checkPasswordError()) {
    passwordError.classList.add('hide');
    passwordSuccess.classList.remove('hide');
  } else {
    hasError = true;
    passwordError.classList.remove('hide');
    passwordSuccess.classList.add('hide');
  }

  if (!checkDuplicatePassword()) {
    duplicatePasswordError.classList.add('hide');
    duplicatePasswordSuccess.classList.remove('hide');
  } else {
    hasError = true;
    duplicatePasswordError.classList.remove('hide');
    duplicatePasswordSuccess.classList.add('hide');
  }

  if (!hasError) {
    signUpButton.classList.add('success'); // 모든 검증을 통과했을 때만 success 클래스 추가
    signUpButton.addEventListener('click', () => {
      modalWrapper.style.display = 'flex';
      modal.style.display = 'flex';
    });
  }
});

function checkNameError() {
  // 값이 비어있으면 true 반환
  return nameInput.value === '';
}

function checkNickNameError() {
  // 값이 비어있으면 true 반환
  return nicknameInput.value === '';
}

function checkEmailError() {
  // 이메일 형식에 맞지 않으면 true 반환
  return emailInput.value.match(emailRegEx) === null;
}

function checkPasswordError() {
  // 비밀번호 형식에 맞지 않으면 true 반환
  return passwordInput.value.match(passwordRegEx) === null;
}

function checkDuplicatePassword() {
  const passwordValue = passwordInput.value.trim();
  const checkPasswordValue = checkPasswordInput.value.trim();

  // 비밀번호 또는 확인란이 비어있거나 불일치하면 true 반환
  return (
    passwordValue === '' ||
    checkPasswordValue === '' ||
    passwordValue !== checkPasswordValue
  );
}

/* CLOSE_MODAL */
closeBtn.addEventListener('click', () => {
  modalWrapper.style.display = 'none';
  modal.style.display = 'none';
});
