
const userName = document.querySelector('#name');
const name2 = document.querySelector(".name2") //필수 입력 항목입니다!
const name3 = document.querySelector(".name3") //멋진 이름이네요!

const nickName = document.querySelector('#nickname');
const nickname2 = document.querySelector('.nickname2'); //닉네임은 2~5글자로 구성해주세요!
const nickname3 = document.querySelector('.nickname3'); //멋진 닉네임이군요!

const email = document.querySelector('#email');
const email2 = document.querySelector('.email2'); //올바른 메일 형식이 아닙니다!
const email3 = document.querySelector('.email3'); //올바른 메일 형식입니다!

const pw = document.querySelector('#pw');
const pw2 = document.querySelector('.pw2'); //영어+숫자+특수문자를 조합하여 작성해주세요.
const pw3 = document.querySelector('.pw3'); //안전한 비밀번호입니다!

const pw_check = document.querySelector('#pw-check');
const pw_check2 = document.querySelector('.pw-check2'); //비밀번호가 일치하지 않습니다.
const pw_check3 = document.querySelector('.pw-check3'); //비밀번호가 일치합니다.

userName.onkeyup = function () {
    if (isMoreThan1Letter(userName.value)){ //success condition
        //success
        name2.classList.add('hidden');
        name3.classList.remove('hidden');
    } else {
        //fail
        name2.classList.remove('hidden');
        name3.classList.add('hidden');
}}

nickName.onkeyup = function() {
    if (is2to5Letter(nickName.value)){
        nickname2.classList.add('hidden');
        nickname3.classList.remove('hidden');
    } else {
        nickname2.classList.remove('hidden');
        nickname3.classList.add('hidden');
}}

email.onkeyup = function() {
    if (emailForm(email.value)){
        email2.classList.add('hidden');
        email3.classList.remove('hidden');
    } else {
        email2.classList.remove('hidden');
        email3.classList.add('hidden');
}}

pw.onkeyup = function() {
    if (passwordRule(pw.value)){
        pw2.classList.add('hidden');
        pw3.classList.remove('hidden');
    } else {
        pw2.classList.remove('hidden');
        pw3.classList.add('hidden');
}}


pw_check.onkeyup = function() {
    if (passwordCheck(pw_check.value)){
        pw_check2.classList.add('hidden');
        pw_check3.classList.remove('hidden');
    } else {
        pw_check2.classList.remove('hidden');
        pw_check3.classList.add('hidden');
}}

function isMoreThan1Letter(value) {
    return value.length >=1 //boolean
}

function is2to5Letter(value) {
    return value.length >= 2 && value.length <= 5
}

function emailForm(value) {
    if ( value.indexOf('@') == -1 ) {
        return false
    } else { 
        return true 
    }
}

function passwordRule(value) {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(str);
} 

function passwordCheck(value1) {
    return value1 === pw.value //boolean
}