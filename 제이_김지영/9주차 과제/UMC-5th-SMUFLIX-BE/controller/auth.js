import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import {} from "express-async-errors";
import * as userRepository from "../data/auth.js";
import { config } from "../config.js";

// const jwtSecretKey = process.env.JWT_SECRET;
// const jwtExpiresInDays = process.env.JWT_EXPIRES_SEC;
// const bcryptSaltRounds = process.env.BCRYPT_SALT_ROUNDS;

export async function signup(req, res) {
  const { username, password, passwordCheck, name, email, age } = req.body;
  const found = await userRepository.findByUsername(username);
  if (found) {
    return res.status(409).json({ message: `${username} already exists` });
  }
  if (password !== passwordCheck) {
    return res.status(400).json({ message: "Passwords do not match" });
  }

  console.log("3");

  const hashed = await bcrypt.hash(password, config.bcrypt.saltRounds);
  const userId = await userRepository.createUser({
    name,
    email,
    age,
    username,
    password: hashed,
  });
  const token = createJwtToken(userId);
  res.status(201).json({ token, username });
}

export async function login(req, res) {
  const { username, password } = req.body;
  const user = await userRepository.findById(username);
  if (!user) {
    return res.status(401).json({ message: "Invalid user or password" });
  }

  console.log("user: ", user);

  const isValidPassword = await bcrypt.compare(password, user.password);
  if (!isValidPassword) {
    return res.status(401).json({ message: "Invalid user or password" });
  }
  const token = createJwtToken(user.id);
  res.status(200).json({ token, username });
}

function createJwtToken(id) {
  return jwt.sign({ id }, config.jwt.secretKey, {
    expiresIn: config.jwt.expiresInSec,
  });
}

export async function me(req, res, next) {
  const user = await userRepository.findById(req.userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    token: req.token,
    username: user.username,
    name: user.name,
    age: user.age,
    email: user.email,
  });
}
