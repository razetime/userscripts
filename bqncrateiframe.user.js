// ==UserScript==
// @name         BQNcrate iframe
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://mlochbaum.github.io/BQN/try.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=github.io
// @grant        none
// ==/UserScript==

(() => {
    let r=document.querySelector(".rslt");
    let i=document.createElement("iframe");
    i.src="https://mlochbaum.github.io/bqncrate";
    i.width="100%";
    i.height="300px";
    r.after(i);
})();
