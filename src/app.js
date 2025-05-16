import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  function aleatorio(who, action, what, when) {
    let whonum = Math.floor(Math.random() * who.length);
    let actionnum = Math.floor(Math.random() * action.length);
    let whatnum = Math.floor(Math.random() * what.length);
    let whennum = Math.floor(Math.random() * when.length);
    return (
      who[whonum] +
      " " +
      action[actionnum] +
      " " +
      what[whatnum] +
      " " +
      when[whennum]
    );
  }

  // function onLoad() {}
  console.log("Hello Rigo from the console!");

    const button = document.querySelector("button");
  if (button) {
    button.addEventListener("click", function () {
      document.querySelector("#excuse").innerHTML = aleatorio(who, action, what, when);
    });
  } else {
    console.warn("Botón no encontrado");
  }
  };
