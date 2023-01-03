"use strict";
const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  const $startTransmition = d.querySelector("#startTransmition");
  const peer = new Peer("angelo123");
  console.log('Peer: ', peer);
  let clientAstream = null;

  peer.on("open", (id) => {
    console.log("Peer onpened with ID: " + id);
  });

  peer.on("connection", (connection) => {
    console.log("Established connection", connection);
  });

  peer.on("error", (err) => {
    console.log("It was an connection error: ", err);
  });

  peer.on("call", async (call) => {
    if (!clientAstream) return console.log("You have not started connection");
    try {
      call.answer(clientAstream);
      console.log("Call answered");
    } catch (error) {
      console.log("Call denied");
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $startTransmition) {
      $startTransmition.classList.remove("online");
      (async () => {
        try {
          clientAstream = await navigator.mediaDevices.getDisplayMedia({
            video: true,
          });
          if (clientAstream) {
            $startTransmition.innerHTML = "Compartiendo escritorio";
            $startTransmition.classList.add("online");
          }
        } catch (error) {
          console.log("permissions denied for media devices");
        }
      })();
    }
  });
});
