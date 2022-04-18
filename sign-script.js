const canvas = document.getElementById("sign");
const ctx = canvas.getContext("2d");

const clear = document.getElementById("clear");
const save = document.getElementById("save");

canvas.width = 300;
canvas.height = 100;

ctx.strokeStyle = "##2c2c2c";
ctx.lineWidth = 1;

let painting = false;

function stopPainting() {
  painting = false; 
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y); 
  } else {
    ctx.lineTo(x, y); 
    ctx.stroke();
  }
}

/*서명 지우기*/
function clearCanvase() {
  ctx.fillStyle = '#fff';
  ctx.fillRect(0, 0, 300, 100);
}

/*서명 다운로드 받기*/
function saveSign() {
  const image = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = image; 
  link.download = 'sign'
  link.click();
}

/*이벤트 리스너 */
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting)
}

if (clear) {
  clear.addEventListener("click", clearCanvase);
}

if (save) {
  save.addEventListener("click", saveSign);
}
