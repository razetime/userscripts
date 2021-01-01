// ==UserScript==
// @name     APL chat
// @version  2.1
// @grant    GM_xmlhttpRequest
// @grant    GM_listValues
// @match    https://chat.stackexchange.com/*
// @require  https://gitlab.com/n9n/apl/-/raw/master/apl.js
// ==/UserScript==

// thanks to @cvzi for making it work correctly!

var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function (mutations, observer) {
	// fired when a mutation occurs
	console.log(mutations, observer);
	let codes = document.getElementsByTagName("code");
	for (let elem of codes) {
		if (elem.innerText && !('interpreted' in elem.dataset) && elem.innerText[0] == '⋄') {
			elem.dataset.interpreted = true;  // see https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
			let result = ''
			let color = 'red'
			// Catch apl error and show it in orange color
			try {
				result = apl.fmt(apl(elem.innerText)).toString()
			} catch (e) {
				result = e.toString()
				color = 'orange'
			}
			let tmp = document.createElement("div");
			tmp.innerHTML = "<pre style=\"color:" + color + "\">" + result.replace("\n", "<br>") + "</pre>";
			let parent = elem.parentElement;
			parent.appendChild(tmp.firstChild);
		}
	}
});

alert = function () { }; // Prevents ⎕← and ⍞← from trggering alerts
window.alert = function () { };
observer.observe(document, {
	subtree: true,
	ChildList: true,
	attributes: true
});

