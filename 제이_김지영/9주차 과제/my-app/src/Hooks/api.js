import axios from "axios";
// getMovieDataWithId
// postSignup, postLogin

export const getMovieDataWithId = async (movieId) => {
  //id로 데이터 받아오기
  //https://developer.themoviedb.org/reference/movie-details
  const options = {
    method: "GET",
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: "ko-KR" },
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_MOVIE_TOKEN}`,
    },
  };
  const result = await axios(options);
  console.log("result: ", result);

  const { poster_path, title, vote_average, overview } = result.data;
  return { poster_path, title, vote_average, overview };
};

export const postSignup = async ({
  //객체로 넣어주면 순서 상관없이 꺼내올 수 있음
  name,
  email,
  age,
  username,
  password,
  passwordCheck,
}) => {
  // const options = {
  //   method: "POST",
  //   url: `http://localhost:8080/auth/signup`, //서버 매뉴얼
  //   data: {
  //     name,
  //     email,
  //     age,
  //     username,
  //     password,
  //     passwordCheck,
  //   },
  // };
  try {
    //sample axios post request in js
    const response = await axios.post("http://localhost:8080/auth/signup", {
      name,
      email,
      age,
      username,
      password,
      passwordCheck,
    });

    console.log("response: ", response);

    // if (response.data.token && response.data.username) {
    if (response.status === 201) {
      return {
        token: response.token,
        username: response.username,
        success: true,
      };
    } else {
      console.log("signup api error: ", response.data.message);
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    console.error(error);
    throw Error;
  }
};

export const postLogin = async ({ username, password }) => {
  // const options = {
  //   method: "POST",
  //   url: `http://localhost:8080/auth/signup`, //서버 매뉴얼
  //   data: {
  //     name,
  //     email,
  //     age,
  //     username,
  //     password,
  //     passwordCheck,
  //   },
  // };
  try {
    const response = await axios.post("http://localhost:8080/auth/login", {
      username,
      password,
    });

    console.log("response: ", response);

    // if (response.data.token && response.data.username) {
    if (response.status === 200) {
      return {
        success: true,
        token: response.data.token,
        username: response.data.username,
      };
    } else {
      console.log("signup api error: ", response.data.message);
      return {
        success: false,
        message: response.data.message,
      };
    }
  } catch (error) {
    console.error(error);
    throw Error;
  }
};
