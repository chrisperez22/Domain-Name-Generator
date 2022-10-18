/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
// import { Generator } from "webpack";

let pronoun = ["The", "Our"];
let adj = ["great", "big", "huge"];
let noun = ["lion", "racoon", "tiger"];
let ext = [".com", ".net", ".gov"];

function randomgenerator(multiply) {
  return Math.floor(Math.random() * multiply.length);
}
window.onload = function() {
  document.getElementById("excuse").innerHTML =
    pronoun[randomgenerator(pronoun)] +
    "" +
    adj[randomgenerator(adj)] +
    "" +
    noun[randomgenerator(noun)] +
    "" +
    ext[randomgenerator(ext)];

  console.log("Hello Rigo!");
};
