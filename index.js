/* eslint-disable no-console */
const express = require("express");

const server = express();

// middlewares globais
// primeiro middlewares
server.use((req, res, next) => {
  console.log("Requisição realizada com sucesso.");

  next();
});

// segundo middlewares
server.use((req, res, next) => {
  console.time("timeLogger");

  next();

  // middlewares apos a ultima chamada da função
  console.timeEnd("timeLogger");
});

// middlewares local
const checkNameExiste = (req, res, next) => {
  const { name } = req.query;

  if (!name) {
    return res.status(400).json({ error: "parâmetro de nome não encontrado" });
  }
  next();
};

const checkUserPermission = (req, res, next) => {
  const userAllowed = ["Felipe", "Alexandre"];
  const { name } = req.query;

  if (!userAllowed.includes(name)) {
    return res.status(401).json({ error: "usuário não tem permissão para acessar este recurso" });
  }

  next();
}

server.get("/hello", checkNameExiste, checkUserPermission, (req, res) => {
  const { name } = req.query;

  return res.json({
    title: "Hello!",
    message: `Olá ${name} tudo bem com você!?`,
  });
});

server.listen(3000);
