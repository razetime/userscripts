// ==UserScript==
// @name         stax file upload
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  stax file upload
// @author       You
// @match        https://staxlang.xyz/
// @icon         https://www.google.com/s2/favicons?domain=staxlang.xyz
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    let text = `<details>
    <summary>
        <span class="btn">Input</span>
    </summary>
    <div class="well">
        <input type="file" id="decoy" style="display:none">
        <button id="fupload" title="Upload">⭱ Upload</button>
    </div>
</details>`;
    let tmp = document.createElement("div");
    tmp.innerHTML = text;
    document.getElementById("tools").appendChild(tmp.firstChild);
    let decoy = document.getElementById("decoy");
    document.getElementById("fupload").addEventListener("click", (e)=>{
        decoy.click();
    });
    decoy.addEventListener("change", (e)=>{
        let file = decoy.files[0];
        if(file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                document.getElementById("stdin").value = evt.target.result;
            }
            reader.onerror = function (evt) {
                document.getElementById("output").val = "file read error";
            }
        } else console.log("Fsdfdsfdsd");
    });
})();