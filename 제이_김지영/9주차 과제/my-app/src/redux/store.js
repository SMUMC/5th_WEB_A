// src/redux/store.js
import { createStore } from "redux";

// // 기존 코드
// // 문제: 새로고침하면 로컬스토리지에 로그인 정보가 있는데도 다시 초기 상태로 돌아가서 로그인 상태가 아닌 것처럼 웹페이지가 작동
// const initialState = {
//   isLoggedIn: false,
// };

// // 수정 코드
// // 문제 원인: 리덕스 스토어의 상태가 새로고침할 때 초기 상태로 재설정되기 때문
// // 해결: 브라우저의 새로고침은 리액트 앱의 상태를 잃어버리게 되는데, 이를 해결하기 위해서는 초기 상태를 로컬 스토리지에서 불러오도록 수정해야 함
const storedLoggedInState = localStorage.getItem("isLoggedIn"); // 로컬 스토리지에서 isLoggedIn 값을 불러오기
const initialState = {
  isLoggedIn: storedLoggedInState ? JSON.parse(storedLoggedInState) : false,
  // 불러온 값이 존재하면 JSON 파싱해서 사용하고, 없으면 기본값으로 false를 사용
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_LOGGED_IN":
      return { ...state, isLoggedIn: action.payload };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;
