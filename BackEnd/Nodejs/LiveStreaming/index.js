"use strict";

const express = require("express"),
  app = express(),
  http = require("http").createServer(app),
  IoServer = require("socket.io")(http),
  publicDir = `${__dirname}/public`;

app.get("/", (req, res) => {
  res.sendFile(`${publicDir}/clientStreaming.html`);
});

app.get("/streaming", (req, res) => {
  res.sendFile(`${publicDir}/serverStreaming.html`);
});

http.listen(3000, () => console.log("http://localhost:3000"));

IoServer.on("connection", (enchufe) => {
  enchufe.on("streaming", (img) => {
    IoServer.emit("play video", img);
  });
});
