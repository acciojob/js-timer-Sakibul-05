// write js code here if required

const timerElement = document.querySelector("#timer");
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth()+1;
let day = date.getDate();
let hour = date.getHours();
let minute = date.getMinutes();
let second = date.getSeconds();
timerElement.innerHTML = `${day}/${month}/${year}, ${hour}:${minute}:${second}`;