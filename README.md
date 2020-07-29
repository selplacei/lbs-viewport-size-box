# lbs-viewport-size-box

![Screenshot of the small black box in the bottom right](https://github.com/selplacei/lbs-viewport-size-box/blob/master/screenshot.jpg?raw=true)

## Installation
Install [Violentmonkey](https://violentmonkey.github.io/). Go to the dashboard (click on the icon in your toolbar, then the gear), click the + at the top left, choose "Install from URL", and paste the following: https://raw.githubusercontent.com/selplacei/lbs-viewport-size-box/master/ViewportSizeBox.js

Of course, this can also work with other userscript extensions such as Tampermonkey.

## Changing behavior
Go to the dashboard and click on the </> icon (or edit the script in whatever way your extension allows you to).

- **To change the websites on which this works**: edit the @match attribute (might not work depending on your extension)
- **To change the position**: replace "right" with "left" or "bottom" with "top" to change alignment. Replace "0px" with "50%" to center
- **To change the colors**: get the hex color code (such as #123ABC) and replace the values next to "background" and/or "color" (the latter is for text)
- **To change the size**: on the same line as "whview.style", paste the following in front of the last double quote, changing the number to whatever you want: `font-size: 12;`
- If you want to do more, you probably know/can figure out a bit of CSS. This script is extremely simple so it should be no trouble.

