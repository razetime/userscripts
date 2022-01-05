// ==UserScript==
// @name         BQN CGCC post
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  add a CGCC button to the BQN try page for golfers.
// @author       Razetime
// @match        https://mlochbaum.github.io/BQN/try.html
// @icon         https://raw.githubusercontent.com/mlochbaum/BQN/master/docs/favicon.ico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const box = document.querySelector(".cont");
    const code = document.querySelector(".code");
    const CGCC = document.createElement("input");
    const perm = document.querySelector(".perm");
    const result = document.querySelector(".rslt");
    CGCC.value = "CGCC";
    CGCC.type = "button";
    CGCC.style.float = "right";
    CGCC.style.marginLeft = "0.7em";
    CGCC.addEventListener("click", e=>{
        let fun = code.value.split("\n")[0]
        if(fun.includes("←")){
            let ind = fun.indexOf("←");
            fun = fun.slice(ind+1).trim();
            perm.focus()
            result.classList.remove("err");
            result.innerText = `# [BQN](https://mlochbaum.github.io/BQN/), ${Array.from(fun).length} bytes<sup>[SBCS](https://github.com/mlochbaum/BQN/blob/master/commentary/sbcs.bqn)</sup>
\`\`\`none
${fun}
\`\`\`

[Run online!](${doc.perm.href})`;
            navigator.clipboard.writeText(result.innerText);
            result.innerText = "Copied to clipboard.\n" + result.innerText;
        }
        else {
            result.classList.add("err");
            result.innerText = "First line must be a function assigned with '←'"
        }
    });

    box.insertBefore(CGCC, perm);

})();