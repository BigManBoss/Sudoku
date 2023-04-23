const canvas = document.querySelector('#canvas');

// let parentSize = parseFloat(getComputedStyle(canvas).height);   //finds parent height

const body = document.querySelector('body');
let ok = body.scrollWidth;
let no = body.scrollHeight;
alert(ok);
alert(no);
canvas.setAttribute('style', `width: ${ok}px;`);  //sets child height