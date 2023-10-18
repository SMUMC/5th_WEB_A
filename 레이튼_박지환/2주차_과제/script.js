const button = document.querySelector(".button_block");

function validationForm() {

    let nameVal = document.getElementById("name").value;
    let nickNameVal = document.getElementById("nickname").value;
    let emailVal = document.getElementById("email").value;
    let passwordVal = document.getElementById("password").value;
    let checkPassVal = document.getElementById("checkpass").value;

    let alertName = document.querySelector('#alert_name');
    let alertNick = document.querySelector('#alert_nickname');
    let alertEmail = document.querySelector('#alert_email');
    let alertPassword = document.querySelector('#alert_password');
    let alertCheckPass = document.querySelector('#alert_checkpass');

    const nameRegex = /^[a-zA-Zㄱ-ㅎㅏ-ㅣ가-힣]+$/;
    const nickRegex = /^.{2,5}$/;
    const emailRegex = /^[a-zA-Z0-9]{3,}@[a-zA-Z0-9]{2,}\.com$/;
    const passwordRegex = /^[a-zA-Z0-9!@#$%^&*()_+{}\[\]:;<>,.?~\\-]+$/;

    const modal = document.querySelector('.modal_wrapped');
    const signupButton = document.querySelector('#signup');
    const closeButton = document.querySelector('#close');
    const closeBackground = document.querySelector('.modal_wrapped');
    
    let allCheck = true;

    
    if(nameVal === "") {
        alertName.style.display = 'flex'; 
        allCheck = false;
    } else if (nameVal.match(nameRegex)) {
        alertName.textContent = '멋진 이름이네요!';
        alertName.style.color = 'green';
        alertName.style.display = 'flex'; 
    }
    
    
    if(nickNameVal.length < 2 || nickNameVal.length > 5) {
        alertNick.style.display = 'flex';
        allCheck = false;   
    } else {
        alertNick.textContent = '멋진 닉네임이군요!';
        alertNick.style.color = 'green';
        alertNick.style.display = 'flex';
    }

    // if(!nickNameVal.match(nickRegex)) {
    //     alertNick.style.visibility = 'visible';
    //     allCheck = false;
    // } else if (nickNameVal.match(nickRegex)) {
    //     alertNick.textContent = '멋진 닉네임이군요!'; 
    //     alertNick.style.color = 'green';
    //     alertNick.style.visibility = 'visible';
    // }
    
    if(!emailVal.match(emailRegex)) {
        alertEmail.style.display = 'flex';
        allCheck = false;
    } else if (emailVal.match(emailRegex)) {
        alertEmail.textContent = '올바른 메일 형식입니다!';
        alertEmail.style.color = 'green';
        alertEmail.style.display = 'flex';
    }
    
    if(!passwordVal.match(passwordRegex)) {
        alertPassword.style.display = 'flex';
        allCheck = false;
    } else if (passwordVal.match(passwordRegex)) {
        alertPassword.textContent = '안전한 비밀번호입니다!';
        alertPassword.style.color = 'green';
        alertPassword.style.display = 'flex';
    }
    
    if(passwordVal !== checkPassVal || checkPassVal === "") {
        alertCheckPass.style.display = 'flex';
        allCheck = false;
    } else if (passwordVal === checkPassVal) {
        alertCheckPass.textContent = '비밀번호가 일치합니다!';
        alertCheckPass.style.color = 'green';
        alertCheckPass.style.display = 'flex';
    }

    if(allCheck === true) {
        signupButton.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });
    
    closeBackground.addEventListener('click', () =>{
        modal.style.display = 'none';
    });


};

button.addEventListener('click', () => { // 버튼 클릭시만 조건부로 검사 함수 실행
    validationForm();
});

