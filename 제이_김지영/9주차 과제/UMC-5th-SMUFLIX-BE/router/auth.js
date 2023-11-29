import express from "express";
import {} from "express-async-errors";
import { body } from "express-validator";
import { validate } from "../middleware/validator.js";
import * as authController from "../controller/auth.js";
import { isAuth } from "../middleware/auth.js";

const router = express.Router();

const validateCredential = [
  body("username")
    .trim()
    .isLength({ min: 5 })
    .notEmpty()
    .withMessage("아이디는 최소 5자리 이상으로 구성해주세요!"),
  body("password")
    .trim()
    .isLength({ min: 4, max: 12 })
    .notEmpty()
    .withMessage(
      "비밀번호는 대소문자, 특수문자 포함 최소 4자리 이상 12자리 이하로 구성해주세요!"
    )
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()])[a-zA-Z0-9!@#$%^&*()]{8,16}$/
    ),
  validate,
];

const validateSignup = [
  ...validateCredential,
  body("name").notEmpty().withMessage("이름을 작성해주세요!"),
  body("email")
    .isEmail()
    .notEmpty()
    .normalizeEmail()
    .withMessage("잘못된 형식의 이메일입니다."),
  body("age").isNumeric().notEmpty(),
  validate,
];
router.post("/signup", validateSignup, authController.signup);

router.post("/login", validateCredential, authController.login);

router.get("/me", isAuth, authController.me);

export default router;
