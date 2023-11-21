### SMUFLIX BE 사용법

```js
npm install
npm start
```

# API 명세서

### `POST`/auth/signup

Reqeust

```json
{
  "name": "김용민",
  "email": "dydals3440@gmail.com",
  "age": "24",
  "username": "dydals3440",
  "password": "Smu123!!",
  "passwordCheck": "Smu123!!"
}
```

회원가입이 성공한 경우 `(success: 201)`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE2OTk4ODczODM3NTYiLCJpYXQiOjE2OTk4ODczODMsImV4cCI6MTY5OTg4NzU1NX0.3L2ydwyCfHsfQGXbcb-hnPgNWEqLRNSb9lTXB-FShKs",
  "username": "username"
}
```

---

이미 존재하는 아이디인경우 `(error: 404)`

Response

```json
{
  "message": "username already exists"
}
```

---

비밀번호가 일치하지 않는경우 `(error: 400)`

```json
{
  "message": "Passwords do not match"
}
```

---

### `POST`/auth/login

Reqeust

```json
{
  "username": "dydals3440",
  "password": "Smu123!!"
}
```

Response `(Success: 200)`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2OTk4NzEyMTUsImV4cCI6MTY5OTg3MTM4N30.wXB7z24Fg0THjO910rfxC9z4H2B8Fq2ty4QjFillB5o",
  "username": "username"
}
```

로그인 실패시 (아이디or 비밀번호가 잘못됬을 시)(error: 401)

```json
{
  "message": "Invalid user or password"
}
```

### `GET` /auth/me (필요 유저 정보 토큰 헤더에 첨부해서 받아오기)

request시, 따로 body로 데이터 전송을 안해주어도 되고, 로그인 시 얻는 토큰을 헤더에 넘겨주시면 됩니다.
Authorization: Bearer `token`

유효한 토큰일시 유저 정보를 아래와 같이 전달받습니다.
`(Success: 200)`

```json
{
  "username": "dydals3440",
  "name": "김용민",
  "age": "24",
  "email": "dydals3440@gmail.com"
}
```

유효하지 않은 토큰일시 `(Error 404)`

```json
{
  "message": "User not found"
}
```
