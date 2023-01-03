"use strict";

const d = document;
d.addEventListener("DOMContentLoaded", (e) => {
  const peer = new Peer();
  const $connectBtn = d.querySelector("#connect"),
    $remoteClientId = d.querySelector("#clientId"),
    $validate = d.querySelector("#validate"),
    $videoTag = d.querySelector("#video"),
    $videobg = d.querySelector(".videobg"),
    $peerId = d.querySelector(".peerId"),
    $loader = d.querySelector(".loader");
  let isPeersConnected = false;

  peer.on("open", (id) => {
    console.log("Peer onpened with ID: " + id);
    $peerId.innerHTML = `Su id de conexión es: ${id}`;
    $connectBtn.disabled = false;
  });

  peer.on("connection", (connection) => {
    console.log("Established connection", connection);
  });

  peer.on("error", (err) => {
    $loader.classList.add("none");
    $videobg.classList.remove("none");
    console.log("It was an connection error: ", err);
    alert('Error de comunicación.');
    if (peer.disconnected) {
      console.log("Trying to reconnecting...");
      peer.reconnect();
    }
  });

  $connectBtn.addEventListener("click", async (e) => {
    if (!$remoteClientId.value.trim())
      return ($validate.innerHTML = "El id del cliente es requerido");
    $videobg.classList.add("none");
    $loader.classList.remove("none");
    $validate.innerHTML = "";
    const conn = peer.connect($remoteClientId.value.trim());
    conn.on("open", async () => {
      console.log("Connection was established successfully");
      isPeersConnected = true;
      console.log("Calling remote peer");
      try {
        // const clientBstream = await navigator.mediaDevices.getUserMedia({
        //   video: true,
        // });
        const canvas = d.createElement('canvas');
        const streamcanvas = canvas.captureStream(60);
        const call = peer.call($remoteClientId.value, streamcanvas);
        console.log("You're now in a call", streamcanvas);
        $loader.classList.add("none");
        $videobg.classList.add("none");
        $videoTag.classList.remove("none");
        call.on("stream", (stream) => {
          $videoTag.srcObject = stream;
        });
      } catch (error) {
        console.log("The sender's browser permissions were denied.", error);
      }
    });
  });
});
