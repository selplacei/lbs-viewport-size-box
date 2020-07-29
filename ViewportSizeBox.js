// ==UserScript==
// @name        lbs-viewport-size-box
// @namespace   Violentmonkey Scripts
// @match       https://littlebigsnake.com/*
// @grant       none
// @version     1.0
// @author      selplacei
// @description Adds a small box in the bottom right to see the size of the viewport.
// @run-at      document-end
// @noframes
// @downloadURL https://raw.githubusercontent.com/selplacei/lbs-viewport-size-box/master/ViewportSizeBox.js
// @homepageURL https://github.com/selplacei/lbs-viewport-size-box
// ==/UserScript==
/*
 * Copyright © 2020 Illia Boiko (selplacei) <ilyaviaik at gmail dot com>
 * This work is free. You can redistribute it and/or modify it under the
 * terms of the Do What The Fuck You Want To Public License, Version 2,
 * as published by Sam Hocevar. See the LICENSE file for more details.
*/
function updatewhview(_) {
  document.getElementById("whview_width").innerHTML = window.innerWidth;
  document.getElementById("whview_height").innerHTML = window.innerHeight;
}
document.getElementsByTagName("BODY")[0].onload = () => {
  window.onresize = updatewhview;
  var whview = document.createElement("DIV");
  whview.style = "background: #000; color: #fff; position: absolute; right: 0px; bottom: 0px; font-family: monospace;"
  whview.innerHTML = "<span id=\"whview_width\"></span>x<span id=\"whview_height\"></span>";
  document.getElementsByTagName("BODY")[0].appendChild(whview);
  updatewhview(null);
}

