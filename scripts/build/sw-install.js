"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),window.onload=function(){function n(e){c.innerText=e,c.className="show"}function i(){c.className=""}var c=document.getElementById("snackbar");window.addEventListener("appinstalled",function(){i()}),window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),n("Click this for quick access WhatsApp Direct!"),c.addEventListener("click",function(){i(),e.prompt(),e.userChoice.then(function(e){"accepted"!==e.outcome&&n("Click this for quick access WhatsApp Direct!")}).catch(function(){n("Click this for quick access WhatsApp Direct!")})})}),"serviceWorker"in navigator&&navigator.serviceWorker.register("scripts/build/sw.js").then(function(t){t.addEventListener("updatefound",function(){if(navigator.serviceWorker.controller){var e=t.installing;e&&(e.onstatechange=function(){switch(e.state){case"installed":n("Update available. Click this to reload."),c.addEventListener("click",function(){i(),window.location.reload()})}})}})})};