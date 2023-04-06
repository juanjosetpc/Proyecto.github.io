const storage = window.localStorage;
const valores = window.location.search;
const urlParams = new URLSearchParams(valores);
const current =  urlParams.get('current');

document.querySelector("#redirectPerfil").addEventListener("click",function () {window.location.href = "perfil.html?current=" +current ;})